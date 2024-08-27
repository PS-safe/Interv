package services

import (
	"time"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"github.com/gofiber/fiber/v2"
)

var (
	ErrorWorkspaceExists = fiber.NewError(fiber.StatusBadRequest, "workspace already exists")
	ErrorUserInWorkspace = fiber.NewError(fiber.StatusBadRequest, "user alreadt in workspace")
)

type IWorkspaceService interface {
	Get(id uint) (workspace *domains.Workspace, err error)
	GetAll(ownerId *uint) (workspace *[]domains.Workspace, err error)
	GetUserNumInWorkspace(ownerId *uint) (workspace []uint, err error)
	Create(title string, isCoding *bool, isVideo *bool, startDate time.Time, stopDate time.Time, owner *uint) (workspace *domains.Workspace, err error)
	Delete(id uint) (err error)

	CreateUserInWorkspace(userId uint, workspaceId uint, status string) (newUserInWorkspace *domains.UserInWorkspace, err error)
	DeleteUserInWorkspace(userId uint, workspaceId uint) (err error)
}
