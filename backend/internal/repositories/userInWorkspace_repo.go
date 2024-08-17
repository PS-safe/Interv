package repositories

import (
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type userInWorkspaceRepository struct {
	DB gorm.DB
}

func NewUserInWorkspaceRepository(db gorm.DB) IUserInWorkspaceRepository {
	return &userInWorkspaceRepository{
		DB: db,
	}
}

func (uiw *userInWorkspaceRepository) Create(UserInWorkspace domains.UserInWorkspace) (newUserInWorkspace *domains.UserInWorkspace, err error) {
	if err := uiw.DB.Clauses(clause.Returning{}).Create(&UserInWorkspace).Error; err != nil {
		return nil, err
	}

	return &UserInWorkspace, nil
}

func (uiw *userInWorkspaceRepository) FindByUserId(userId uint) (userInWorkspace *[]domains.UserInWorkspace, err error) {
	foundUserInWorkspace := new([]domains.UserInWorkspace)
	if err := uiw.DB.Find(&foundUserInWorkspace, "userId = ?", userId).Error; err != nil {
		return nil, err
	}
	return foundUserInWorkspace, nil
}

func (uiw *userInWorkspaceRepository) FindByWorkspaceId(workspaceId uint) (userInWorkspace *[]domains.UserInWorkspace, err error) {
	foundUserInWorkspace := new([]domains.UserInWorkspace)
	if err := uiw.DB.Find(&foundUserInWorkspace, "workspaceId = ?", workspaceId).Error; err != nil {
		return nil, err
	}
	return foundUserInWorkspace, nil
}

func (uiw *userInWorkspaceRepository) FindByUserIdAndWorkspaceId(userId uint, workspaceId uint) (userInWorkspace *domains.UserInWorkspace, err error) {
	foundUserInWorkspace := new(domains.UserInWorkspace)
	if err := uiw.DB.First(&foundUserInWorkspace, "userId = ? AND workspaceId", userId, workspaceId).Error; err != nil {
		return nil, err
	}
	return foundUserInWorkspace, nil
}

func (uiw *userInWorkspaceRepository) DeleteById(id uint) (err error) {
	if err := uiw.DB.Delete(&domains.UserInWorkspace{}, "id = ?", id).Error; err != nil {
		return err
	}
	return nil
}

func (uiw *userInWorkspaceRepository) DeleteByUserId(userId uint) (err error) {
	if err := uiw.DB.Delete(&domains.UserInWorkspace{}, "userId = ?", userId).Error; err != nil {
		return err
	}
	return nil
}

func (uiw *userInWorkspaceRepository) DeleteByWorkspaceId(workspaceId uint) (err error) {
	if err := uiw.DB.Delete(&domains.UserInWorkspace{}, "workdspaceId = ?", workspaceId).Error; err != nil {
		return err
	}
	return nil
}

func (uiw *userInWorkspaceRepository) DeleteByUserIdAndWorkspaceId(userId uint, workspaceId uint) (err error) {
	if err := uiw.DB.Delete(&domains.UserInWorkspace{}, "userId = ? AND workdspaceId = ?", userId, workspaceId).Error; err != nil {
		return err
	}
	return nil
}

