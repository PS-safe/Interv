package domains

import (
	"time"
)

type Workspace struct {
	Id        uint   `gorm:"primaryKey"`
	Title     string `gorm:"unique"`
	IsVideo   *bool
	IsCoding  *bool
	StartDate time.Time
	StopDate  time.Time
	Owner     uint `gorm:"foreignKey:UserId"`
	CreatedAt time.Time
	UpdatedAt time.Time
	// DeletedAt DeletedAt `gorm:"index"`
}
