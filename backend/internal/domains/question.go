package domains

import (
	"gorm.io/gorm"
)

type Question struct {
	ID            uint `gorm:"primaryKey"`
	Title         string
	TimeToPrepare uint
	TimeToAnswer  uint
	RetryAmount   uint
	PortalId      uint
	gorm.Model
}
