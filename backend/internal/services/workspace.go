package services

import (
	"time"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"github.com/gofiber/fiber/v2"
)

var (
	ErrorWorkspaceExists = fiber.NewError(fiber.StatusBadRequest, "workspace already exists")
)

type IWorkspaceService interface {
	Create(title string, isCoding *bool, isVideo *bool, startDate time.Time, stopDate time.Time) (workspace *domains.Workspace, err error)
	//Update(id uint, title *string, isCoding *bool, isVideo *bool, startDate *time.Time, stopDate *time.Time) (workspace *domains.Workspace, err error)
	Delete(id uint) (err error)
}
