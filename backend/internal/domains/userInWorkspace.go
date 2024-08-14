package domains

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

const (
	StatusUnseen  = "unseen"
	StatusPending = "pending"
	StatusSuccess = "success"
)

type StatusType string

type UserInWorkspace struct {
	ID          *uint `gorm:"primaryKey"`
	UserId      *uint
	User        User `gorm:"foreignKey:UserId"`
	WorkspaceId *uint
	Workspace   Workspace `gorm:"foreignKey:WorkspaceId"`
	Status      StatusType
	IsInterest  *bool `gorm:"default:false"`
}

func (UIW *UserInWorkspace) BeforeCreate(tx *gorm.DB) (err error) {
	validModes := []StatusType{StatusUnseen, StatusPending, StatusSuccess}
	for _, validMode := range validModes {
		if UIW.Status == validMode {
			return nil
		}
	}
	return fiber.NewError(fiber.StatusBadRequest, "invalid status , must be one of: "+StatusUnseen+", "+StatusPending+", "+StatusSuccess)
}
