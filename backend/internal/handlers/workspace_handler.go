package handlers

import (
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/services"
	"github.com/gofiber/fiber/v2"
)

type WorkspaceHandler struct {
	workspaceService services.IWorkspaceService
}

func NewWorkspaceHandler(workspaceService services.IWorkspaceService) WorkspaceHandler {
	return WorkspaceHandler{
		workspaceService: workspaceService,
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

func (w WorkspaceHandler) CreateWorkspace(c *fiber.Ctx) error {
	form := new(CreateWorkspaceBody)

	if err := c.BodyParser(form); err != nil {
		return err
	}

	if err := validate.Struct(form); err != nil {
		return err
	}

	response, err := w.workspaceService.Create(form.Title, form.IsVideo, form.IsCoding, form.StartDate, form.StopDate)
	if err != nil {
		return err
	}

	return Created(c, WorkspaceData{
		ID:        response.ID,
		Title:     response.Title,
		IsVideo:   *response.IsVideo,
		IsCoding:  *response.IsCoding,
		StartDate: response.StartDate,
		StopDate:  response.StopDate,
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

func (w WorkspaceHandler) DeleteWorkspace(c *fiber.Ctx) error {
	form := new(DeleteWorkspaceBody)

	if err := c.BodyParser(form); err != nil {
		return err
	}

	if err := w.workspaceService.Delete(*form.Id); err != nil {
		return err
	}

	return Ok(c, form.Id)
}
