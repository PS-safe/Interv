package services

import (
	"strings"
	"time"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
)

type workspaceService struct {
	workspaceReposity       repositories.IWorkspaceRepository
	userInWorkspaceReposity repositories.IUserInWorkspaceRepository
}

func NewWorkspaceService(workspaceReposity repositories.IWorkspaceRepository, userInWorkspaceReposity repositories.IUserInWorkspaceRepository) IWorkspaceService {
	return &workspaceService{
		workspaceReposity:       workspaceReposity,
		userInWorkspaceReposity: userInWorkspaceReposity,
	}
}

func (w *workspaceService) Create(title string, isCoding *bool, isVideo *bool, startDate time.Time, stopDate time.Time) (workspace *domains.Workspace, err error) {

	if _, err := w.workspaceReposity.FindByTitle(strings.TrimSpace(title)); err == nil {
		return nil, ErrorWorkspaceExists
	}

	return w.workspaceReposity.Create(domains.Workspace{
		Title:     strings.TrimSpace(title),
		IsVideo:   isVideo,
		IsCoding:  isCoding,
		StartDate: startDate,
		StopDate:  stopDate,
	})
}

func (w *workspaceService) Delete(id uint) (err error) {
	return w.workspaceReposity.DeleteById(id)
}

func (w *workspaceService) CreateUserInWorkspace(userId uint, workspaceId uint, status string) (newUserInWorkspace *domains.UserInWorkspace, err error) {

	userInWorkspace, err := w.userInWorkspaceReposity.FindByWorkspaceId(workspaceId)

	if err != nil {
		return nil, err
	}

	for _, user := range *userInWorkspace {
		if user.UserId == userId {
			return nil, ErrorUserInWorkspace
		}
	}

	return w.userInWorkspaceReposity.Create(domains.UserInWorkspace{
		UserId:      userId,
		WorkspaceId: workspaceId,
		Status:      domains.StatusType(strings.ToLower(strings.TrimSpace(status))),
	})
}

func (w *workspaceService) DeleteUserInWorkspace(userId uint, workspaceId uint) (err error) {
	return w.userInWorkspaceReposity.DeleteByUserIdAndWorkspaceId(userId, workspaceId)
}
