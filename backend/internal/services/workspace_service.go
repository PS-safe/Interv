package services

import (
	"strings"
	"time"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
)

type workspaceService struct {
	workReposity repositories.IWorkspaceRepository
}

func NewWorkspaceService(workReposity repositories.IWorkspaceRepository) IWorkspaceService {
	return &workspaceService{
		workReposity: workReposity,
	}
}

func (w *workspaceService) Create(title string, isCoding *bool, isVideo *bool, startDate time.Time, stopDate time.Time) (workspace *domains.Workspace, err error) {

	if _, err := w.workReposity.FindByTitle(strings.TrimSpace(title)); err == nil {
		return nil, ErrorWorkspaceExists
	}

	return w.workReposity.Create(domains.Workspace{
		Title:     strings.TrimSpace(title),
		IsVideo:   isVideo,
		IsCoding:  isCoding,
		StartDate: startDate,
		StopDate:  stopDate,
	})
}

func (w *workspaceService) Delete(id uint) (err error) {
	return w.workReposity.DeleteById(id)
}
