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
	Create(title string, isCoding *bool, isVideo *bool, startDate time.Time, stopDate time.Time) (workspace *domains.Workspace, err error)
	Delete(id uint) (err error)
	// Update(id uint, title *string, isCoding *bool, isVideo *bool, startDate *time.Time, stopDate *time.Time) (workspace *domains.Workspace, err error)
	// AddUser(userId uint, workspaceId uint) (newUser domains.UserInWorkspace, err error)
	CreateUserInWorkspace(userId uint, workspaceId uint, status string) (newUserInWorkspace *domains.UserInWorkspace, err error)
	DeleteUserInWorkspace(userId uint, workspaceId uint) (err error)
}

// type IUserInWorkspaceService interface {
// 	Add(userId []uint, workspaceId uint) (newUserInWorkspace *domains.UserInWorkspace, err error)
// 	Delete(userId uint, workspaceId uint) (err error)
// }
