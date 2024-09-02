package services

import (
	"strings"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
	"golang.org/x/crypto/bcrypt"
)

type userService struct {
	userRepository          repositories.IUserRepository
	userInWorkspaceReposity repositories.IUserInWorkspaceRepository
}

func NewUserService(userRepository repositories.IUserRepository, userInWorkspaceReposity repositories.IUserInWorkspaceRepository) IUserService {
	return &userService{
		userRepository:          userRepository,
		userInWorkspaceReposity: userInWorkspaceReposity,
	}
}

func (u *userService) Create(username string, password string, role string, workspaceId uint) (newUser *domains.User, newUserInworkspace *domains.UserInWorkspace, err error) {

	if _, err := u.userRepository.FindByUsername(strings.TrimSpace(username)); err == nil {
		return nil, nil, ErrorUserAlreadyExists
	}

	defaultInterest := false
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, nil, err
	}
	user, err := u.userRepository.Create(domains.User{
		Username: strings.TrimSpace(username),
		Password: strings.TrimSpace(string(bytes)),
		Role:     domains.UserType(strings.ToLower(strings.TrimSpace(role))),
	})
	if err != nil {
		return nil, nil, err
	}
	uiw, err := u.userInWorkspaceReposity.Create(domains.UserInWorkspace{
		UserId:      user.ID,
		WorkspaceId: workspaceId,
		Status:      "unseen",
		IsInterest:  &defaultInterest,
	})
	if err != nil {
		return nil, nil, err
	}
	return user, uiw, nil
}

func (u *userService) Delete(id uint) (err error) {
	return u.userRepository.DeleteById(id)
}
