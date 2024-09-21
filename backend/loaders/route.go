package loaders

import (
	"errors"
	"fmt"
	swagger "github.com/arsmn/fiber-swagger/v2"
	"github.com/spf13/viper"
	"time"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/handlers"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/services"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func SetupRoutes() {

	serverAddr := fmt.Sprintf("%s:%d", viper.GetString(EnvServerHost), viper.GetInt(EnvServerPort))

	// Repositories
	var userRepositories = repositories.NewUserRepository(*DB)
	var objectRepositories = repositories.NewObjectRepository(*MINIO)
	var mailRepositories = repositories.NewMailRepository(*MAILJET)
	var videoQuestionRepositories = repositories.NewQuestionRepository(*DB)
	var lobbyRepositories = repositories.NewLobbyRepository(*DB)

	// Services
	var userServices = services.NewUserService(userRepositories)
	var authServices = services.NewAuthService(userRepositories)
	var videoInterviewServices = services.NewVideoInterviewService(objectRepositories, videoQuestionRepositories, lobbyRepositories)
	var objectServices = services.NewObjectService(objectRepositories)
	var mailServices = services.NewMailService(mailRepositories)
	var questionServices = services.NewQuestionService(videoQuestionRepositories)
	var lobbyServices = services.NewLobbyService(lobbyRepositories)

	// Handlers
	var userHandlers = handlers.NewUserHandler(userServices)
	var authHandlers = handlers.NewAuthHandler(authServices)
	var videoInterviewHandlers = handlers.NewVideoInterviewHandler(videoInterviewServices)
	var objectHandlers = handlers.NewObjectHandler(objectServices)
	var mailHandlers = handlers.NewMailHandler(mailServices)
	var questionHandlers = handlers.NewVideoQuestionHandler(questionServices)
	var lobbyHandlers = handlers.NewLobbyHandler(lobbyServices)

	// Fiber App
	app := NewFiberApp()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     viper.GetString(EnvServerOrigins),
		AllowCredentials: true,
	}))

	// Public Routes
	public := app.Group("/api")
	public.Get("healthcheck", handlers.HealthCheck)
	public.Get("swagger/*", swagger.HandlerDefault)
	public.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, Interv 🕊️")
	})

	// user
	public.Post("user.createUser", userHandlers.CreateUser)

	// auth
	public.Post("auth.login", authHandlers.Login)
	public.Post("auth.logout", authHandlers.Logout)
	public.Get("auth.me", authHandlers.Me)

	// videoInterview
	public.Get("videoInterview.getVideoInterviewContext", videoInterviewHandlers.GetVideoInterviewContext)
	public.Get("videoInterview.getVideoInterviewQuestion", videoInterviewHandlers.GetVideoInterviewQuestion)
	public.Post("videoInterview.submitVideoInterview", videoInterviewHandlers.SubmitVideoInterview)

	// question
	public.Post("videoQuestion.createQuestion", questionHandlers.CreateVideoQuestion)
	public.Get("videoQuestion.getQuestion", questionHandlers.GetVideoQuestion)
	public.Get("videoQuestion.getQuestionByPortalId", questionHandlers.GetVideoQuestionByWorkspaceId)
	public.Post("videoQuestion.updateQuestion", questionHandlers.UpdateVideoQuestion)
	public.Post("videoQuestion.deleteQuestion", questionHandlers.DeleteVideoQuestion)

	// lobby
	public.Get("lobby.getLobbyContext", lobbyHandlers.GetLobbyContext)
	public.Post("lobby.updateLobbyContext", lobbyHandlers.UpdateLobbyContext)

	// Private Routes
	private := app.Group("/api")
	private.Use(JwtAuthentication)

	// User
	private.Post("user.deleteUser", userHandlers.DeleteUser)

	// Auth

	// portal

	// Object
	private.Post("object.uploadObject", objectHandlers.UploadObject)
	private.Post("object.getObject", objectHandlers.GetObject)

	// Mail
	private.Post("mail.sendMail", mailHandlers.SendMail)

	ListenAndServe(app, serverAddr)
}

func NewFiberApp() *fiber.App {
	fiberConfig := fiber.Config{
		AppName: "🕊️",
		ErrorHandler: func(ctx *fiber.Ctx, err error) error {
			// Status code defaults to 500
			code := fiber.StatusInternalServerError
			Message := ""
			if err != nil {
				Message = err.Error()
				if Message == "" {
					Message = "Something went wrong"
				}
			}

			// Retrieve the custom status code if it's a *fiber.Error
			var e *fiber.Error
			if errors.As(err, &e) {
				code = e.Code
				Message = e.Message
			}

			if err != nil {
				// In case the SendFile fails
				return ctx.Status(code).JSON(handlers.ErrResponse{
					Code:      code,
					Message:   Message,
					Timestamp: time.Now(),
				})
			}

			// Return from handler
			return nil
		},
		StreamRequestBody: true,
	}

	app := fiber.New(fiberConfig)
	return app
}

func ListenAndServe(app *fiber.App, serverAddr string) {
	err := app.Listen(serverAddr)
	if err != nil {
		panic(err)
	}
}
