package handlers

import (
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/services"
	"github.com/gofiber/fiber/v2"
)

type UserInWorkspaceHandler struct {
	UserInWorkspaceService services.IWorkspaceService
}

func NewUserInWorkspaceHandler(UserInWorkspaceService services.IWorkspaceService) UserInWorkspaceHandler {
	return UserInWorkspaceHandler{
		UserInWorkspaceService: UserInWorkspaceService,
	}
}

func (uiw UserInWorkspaceHandler) AddUserToWorkspace(c *fiber.Ctx) error {
	body := AddUserToWorkspaceBody{}

	if err := c.BodyParser(&body); err != nil {
		return err
	}

	if err := validate.Struct(body); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	response, err := uiw.UserInWorkspaceService.CreateUserInWorkspace(body.UserId, body.WorkspaceId, body.Status)

	if err != nil {
		return err
	}

	return Created(c, UserInWorkspace{
		ID:          response.ID,
		UserId:      response.UserId,
		WorkspaceId: response.WorkspaceId,
		Status:      (string)(response.Status),
		IsInterest:  *response.IsInterest,
	})
}

func (uiw UserInWorkspaceHandler) DeleteUserFromWorkspace(c *fiber.Ctx) error {
	body := DeleteUserFromWorkspaceBody{}

	if err := c.BodyParser(&body); err != nil {
		return err
	}

	// userId, err := GetCurrentUser(c)

	// if err != nil {
	// 	return err
	// }
	// need to check workspace owner ?

	if err := uiw.UserInWorkspaceService.DeleteUserInWorkspace(body.UserId, body.WorkspaceId); err != nil {
		return err
	}

	return Ok(c, body.UserId, body.WorkspaceId)
}
