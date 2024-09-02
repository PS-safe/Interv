package handlers

import (
	"fmt"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/services"
	"github.com/gofiber/fiber/v2"
)

type UserHandler struct {
	userService services.IUserService
}

func NewUserHandler(userService services.IUserService) UserHandler {
	return UserHandler{
		userService: userService,
	}
}

// CreateUser
// @ID createUser
// @Tags user
// @Summary Create new user
// @Accept json
// @Produce json
// @Param payload body CreateUserBody true "CreateUserBody"
// @Success 200 {object} Response[UserData]
// @Failure 400 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /user.createUser [post]
func (u UserHandler) CreateUser(c *fiber.Ctx) error {
	body := CreateUserBody{}
	if err := c.BodyParser(&body); err != nil {
		return err
	}

	if err := validate.Struct(body); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	userResponse, inWorkspaceResponse, err := u.userService.Create(body.Username, body.Password, body.Role, body.WorkspaceId)

	if err != nil {
		return err
	}

	fmt.Print(inWorkspaceResponse)

	return Created(c, UserData{
		ID:        userResponse.ID,
		Username:  userResponse.Username,
		Role:      (string)(userResponse.Role),
		CreatedAt: userResponse.CreatedAt,
		UpdatedAt: userResponse.UpdatedAt,
	})
}

// DeleteUser
// @ID deleteUser
// @Tags user
// @Summary Delete user
// @Accept json
// @Produce json
// @Param payload body DeleteUserBody true "DeleteUserBody"
// @Success 200 {object} Response[string]
// @Failure 400 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /user.deleteUser [post]
func (u UserHandler) DeleteUser(c *fiber.Ctx) error {
	body := DeleteUserBody{}

	if err := c.BodyParser(&body); err != nil {
		return err
	}

	userId, err := GetCurrentUser(c)

	if err != nil {
		return err
	}

	if body.Id == *userId {
		return fiber.NewError(fiber.StatusBadRequest, "cannot delete yourself")
	}

	if err := u.userService.Delete(body.Id); err != nil {
		return err
	}

	return Ok(c, body.Id)
}
