package handlers

import (
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/services"
	"github.com/gofiber/fiber/v2"
)

type QuestionHandler struct {
	questionService services.IQuestionService
}

func NewQuestionHandler(questionService services.IQuestionService) QuestionHandler {
	return QuestionHandler{
		questionService: questionService,
	}
}

// CreateQuestion
// @ID createQuestion
// @Tags question
// @Summary Create new question
// @Accept json
// @Produce json
// @Param payload body CreateQuestionBody true "CreateQuestionBody"
// @Success 200 {object} Response[CreateQuestionResponse]
// @Failure 400 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /question.createQuestion [post]
func (q QuestionHandler) CreateQuestion(c *fiber.Ctx) error {
	body := CreateQuestionBody{}

	if err := c.BodyParser(&body); err != nil {
		return err
	}

	if err := validate.Struct(body); err != nil {
		return err
	}

	response, err := q.questionService.CreateQuestion(domains.Question{
		Title:         body.Title,
		TimeToPrepare: body.TimeToPrepare,
		TimeToAnswer:  body.TimeToAnswer,
		RetryAmount:   body.RetryAmount,
		PortalId:      body.PortalId,
	})

	if err != nil {
		return err
	}

	return Created(c, CreateQuestionResponse{
		ID:            response.ID,
		Title:         response.Title,
		TimeToPrepare: response.TimeToPrepare,
		TimeToAnswer:  response.TimeToAnswer,
		RetryAmount:   response.RetryAmount,
		PortalId:      response.PortalId,
		CreatedAt:     response.CreatedAt,
		UpdatedAt:     response.UpdatedAt,
	})
}

// GetQuestion
// @ID getQuestionById
// @Tags question
// @Summary Get question by id
// @Accept json
// @Produce json
// @Param payload query GetQuestionByIdParam true "Question ID"
// @Success 200 {object} Response[GetQuestionByIdResponse]
// @Failure 400 {object} ErrResponse
// @Failure 404 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /question.getQuestionById/{id} [get]
func (q QuestionHandler) GetQuestion(c *fiber.Ctx) error {
	param := GetQuestionByIdParam{}
	if err := c.QueryParser(&param); err != nil {
		return err
	}
	if err := validate.Struct(param); err != nil {
		return err
	}

	response, err := q.questionService.GetQuestionById(param.ID)
	if err != nil {
		return err
	}

	return Ok(c, GetQuestionByIdResponse{
		ID:            response.ID,
		Title:         response.Title,
		TimeToPrepare: response.TimeToPrepare,
		TimeToAnswer:  response.TimeToAnswer,
		RetryAmount:   response.RetryAmount,
		PortalId:      response.PortalId,
		CreatedAt:     response.CreatedAt,
		UpdatedAt:     response.UpdatedAt,
	})
}

// GetQuestionByPortalId
// @ID getQuestionByPortalId
// @Tags question
// @Summary Get question by portal id
// @Accept json
// @Produce json
// @Param payload query GetQuestionByPortalIdParam true "Portal ID"
// @Success 200 {array} Response[[]GetQuestionByIdResponse]
// @Failure 400 {object} ErrResponse
// @Failure 404 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /question.getQuestionByPortalId/{id} [get]
func (q QuestionHandler) GetQuestionByPortalId(c *fiber.Ctx) error {
	var param GetQuestionByPortalIdParam
	if err := c.QueryParser(&param); err != nil {
		return err
	}
	if err := validate.Struct(param); err != nil {
		return err
	}

	response, err := q.questionService.GetQuestionByPortalId(param.ID)
	if err != nil {
		return err
	}

	return Ok(c, response)
}

// UpdateQuestion
// @ID updateQuestion
// @Tags question
// @Summary Update question
// @Accept json
// @Produce json
// @Param payload body UpdateQuestionBody true "UpdateQuestionBody"
// @Success 200 {object} Response[CreateQuestionResponse]
// @Failure 400 {object} ErrResponse
// @Failure 404 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /question.updateQuestion [post]
func (q QuestionHandler) UpdateQuestion(c *fiber.Ctx) error {
	body := UpdateQuestionBody{}

	if err := c.BodyParser(&body); err != nil {
		return err
	}

	if err := validate.Struct(body); err != nil {
		return err
	}

	response, err := q.questionService.UpdateQuestion(domains.Question{
		ID:            body.ID,
		Title:         body.Title,
		TimeToPrepare: body.TimeToPrepare,
		TimeToAnswer:  body.TimeToAnswer,
		RetryAmount:   body.RetryAmount,
		PortalId:      body.PortalId,
	})

	if err != nil {
		return err
	}

	return Ok(c, CreateQuestionResponse{
		ID:            response.ID,
		Title:         response.Title,
		TimeToPrepare: response.TimeToPrepare,
		TimeToAnswer:  response.TimeToAnswer,
		RetryAmount:   response.RetryAmount,
		PortalId:      response.PortalId,
		CreatedAt:     response.CreatedAt,
		UpdatedAt:     response.UpdatedAt,
	})
}

// DeleteQuestion
// @ID deleteQuestionById
// @Tags question
// @Summary Delete question by id
// @Accept json
// @Produce json
// @Param payload query GetQuestionByIdParam true "Question ID"
// @Success 200 {object} Response[string]
// @Failure 400 {object} ErrResponse
// @Failure 404 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /question.deleteQuestionById [post]
func (q QuestionHandler) DeleteQuestion(c *fiber.Ctx) error {
	body := DeleteQuestionByIdBody{}
	if err := c.BodyParser(&body); err != nil {
		return err
	}
	if err := validate.Struct(body); err != nil {
		return err
	}

	err := q.questionService.DeleteQuestionById(body.ID)
	if err != nil {
		return err
	}

	return Ok(c, "Deleted successfully")
}
