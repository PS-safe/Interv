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

// GetWorkspace
// @ID GetWorkspace
// @Tags workspace
// @Summary Get workspace
// @Accept json
// @Produce json
// @Param payload body GetWorkspaceBody true "GetWorkspaceBody"
// @Success 200 {object} Response[WorkspaceData]
// @Failure 400 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /workspace.get [get]
func (w WorkspaceHandler) GetWorkspace(c *fiber.Ctx) error {
	form := new(GetWorkspaceBody)

	if err := c.BodyParser(form); err != nil {
		return err
	}

	response, err := w.workspaceService.Get(*form.Id)

	if err != nil {
		return err
	}

	return Ok(c, response)
}

// GetAllWorkspace
// @ID GetAllWorkspace
// @Tags workspace
// @Summary Get List of workspace
// @Accept json
// @Produce json
// @Success 200 {object} Response[[]WorkspaceData]
// @Failure 400 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /workspace.getAll [get]
func (w WorkspaceHandler) GetAllWorkspace(c *fiber.Ctx) error {
	userId, err := GetCurrentUser(c)
	if err != nil {
		return err
	}
	response, err := w.workspaceService.GetAll(userId)
	if err != nil {
		return err
	}

	member, err := w.workspaceService.GetUserNumInWorkspace(userId)
	if err != nil {
		return err
	}
	var res []WorkspaceData

	for index, v := range *response {
		res = append(res, WorkspaceData{
			ID:        v.ID,
			Title:     v.Title,
			IsVideo:   *v.IsVideo,
			IsCoding:  *v.IsCoding,
			StartDate: v.StartDate,
			StopDate:  v.StopDate,
			Owner:     v.Owner,
			MemberNum: member[index],
		})
	}

	return Ok(c, res)
}

// CreateWorkspace
// @ID CreateWorkspace
// @Tags workspace
// @Summary Create new workspace
// @Accept json
// @Produce json
// @Param payload body CreateWorkspaceBody true "CreateWorkspaceBody"
// @Success 200 {object} Response[WorkspaceData]
// @Failure 400 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /workspace.create [post]
func (w WorkspaceHandler) CreateWorkspace(c *fiber.Ctx) error {
	form := new(CreateWorkspaceBody)

	if err := c.BodyParser(form); err != nil {
		return err
	}

	if err := validate.Struct(form); err != nil {
		return err
	}

	userId, err := GetCurrentUser(c)
	if err != nil {
		return err
	}

	response, err := w.workspaceService.Create(form.Title, form.IsVideo, form.IsCoding, form.StartDate, form.StopDate, userId)
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
		Owner:     response.Owner,
		MemberNum: 0,
	})
}

// DeleteWorkspace
// @ID DeleteWorkspace
// @Tags workspace
// @Summary Delete workspace
// @Accept json
// @Produce json
// @Param payload body DeleteWorkspaceBody true "DeleteWorkspaceBody"
// @Success 200 {object} Response[string]
// @Failure 400 {object} ErrResponse
// @Failure 500 {object} ErrResponse
// @Router /workspace.delete [post]
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
