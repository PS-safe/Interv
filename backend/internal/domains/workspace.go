package domains

import (
	"time"
)

type Workspace struct {
	ID        uint   `gorm:"primaryKey"`
	Title     string `gorm:"unique"`
	IsVideo   *bool
	IsCoding  *bool
	StartDate time.Time
	StopDate  time.Time
	Owner     uint `gorm:"foreignKey:UserId"`
}
