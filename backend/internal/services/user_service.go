package services

import (
	"strings"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
)

type userService struct {
	userRepository            repositories.IUserRepository
	userInWorkspaceRepository repositories.IUserInWorkspaceRepository
}

func NewUserService(userRepository repositories.IUserRepository, userInWorkspaceRepository repositories.IUserInWorkspaceRepository) IUserService {
	return &userService{
		userRepository:            userRepository,
		userInWorkspaceRepository: userInWorkspaceRepository,
	}
}

func (u *userService) Create(importUser []domains.User, workspaceId uint) (err error) {

	defaultInterest := false
	var checkedUser []*domains.UserInWorkspace

	for x, aImportUser := range importUser {
		userFound, err := u.userRepository.FindByUsername(strings.TrimSpace(importUser[x].Username))
		if err != nil {
			user, err := u.userRepository.Create(aImportUser)
			if err != nil {
				return err
			}
			checkedUser = append(checkedUser, &domains.UserInWorkspace{
				UserId:      user.ID,
				WorkspaceId: workspaceId,
				Status:      "unseen",
				IsInterest:  &defaultInterest,
			})
		} else {
			_, err := u.userInWorkspaceRepository.FindByUserIdAndWorkspaceId(userFound.ID, workspaceId)
			if err != nil {
				checkedUser = append(checkedUser, &domains.UserInWorkspace{
					UserId:      userFound.ID,
					WorkspaceId: workspaceId,
					Status:      "unseen",
					IsInterest:  &defaultInterest,
				})
			}
		}
	}

	_, err = u.userInWorkspaceRepository.Create(checkedUser)
	if err == nil {
		return err
	}
	return nil
}

func (u *userService) Delete(id uint) (err error) {
	u.userInWorkspaceRepository.DeleteByUserId(id)
	return u.userRepository.DeleteById(id)
}
