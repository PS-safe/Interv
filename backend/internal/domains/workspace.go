package domains

import (
	"time"
)

// var (
// 	UserRoleCandidate = "candidate"
// 	UserRoleAdmin     = "admin"
// )

type Workspace struct {
	ID        uint   `gorm:"primaryKey"`
	Title     string `gorm:"unique"`
	IsVideo   *bool
	IsCoding  *bool
	StartDate time.Time
	StopDate  time.Time
}
