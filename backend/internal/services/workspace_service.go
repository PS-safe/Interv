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

func (w *workspaceService) Get(id uint) (workspace *domains.Workspace, err error) {
	return w.workspaceReposity.FindById(id)
}

func (w *workspaceService) GetAll(owner_id *uint) (workspace *[]domains.Workspace, err error) {
	return w.workspaceReposity.FindByOwner(owner_id)
}

func (w *workspaceService) GetUserNumInWorkspace(owner_id *uint) (workspace_id []uint, err error) {
	ListOfWorkspace, err := w.workspaceReposity.FindWorkspaceIdByOwner(owner_id)
	if err != nil {
		return nil, err
	}

	var UserWorkspace []uint
	for _, uw := range *ListOfWorkspace {
		NumberOfUser, err := w.userInWorkspaceReposity.GetUserNumberInWorkspace(uw)
		if err != nil {
			return nil, err
		}
		UserWorkspace = append(UserWorkspace, uint(NumberOfUser))
	}

	return UserWorkspace, nil
}

func (w *workspaceService) Create(title string, isCoding *bool, isVideo *bool, startDate time.Time, stopDate time.Time, owner *uint) (workspace *domains.Workspace, err error) {

	if _, err := w.workspaceReposity.FindByTitle(strings.TrimSpace(title)); err == nil {
		return nil, ErrorWorkspaceExists
	}

	return w.workspaceReposity.Create(domains.Workspace{
		Title:     strings.TrimSpace(title),
		IsVideo:   isVideo,
		IsCoding:  isCoding,
		StartDate: startDate,
		StopDate:  stopDate,
		Owner:     *owner,
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
