package handlers

import "time"

type WorkspaceData struct {
	ID        uint      `json:"id"`
	Title     string    `json:"title"`
	IsVideo   bool      `json:"isvideo"`
	IsCoding  bool      `json:"iscoding"`
	StartDate time.Time `json:"startdate"`
	StopDate  time.Time `json:"stopdate"`
} // @name Workspace

type CreateWorkspaceBody struct {
	Title     string    `json:"title" validate:"required"`
	IsVideo   *bool     `json:"isvideo" validate:"required"`
	IsCoding  *bool     `json:"iscoding" validate:"required"`
	StartDate time.Time `json:"startdate" validate:"required"`
	StopDate  time.Time `json:"stopdate" validate:"required"`
} // @name WorkspaceCreateBody

type DeleteWorkspaceBody struct {
	Id *uint `json:"id" validate:"required"`
} // @name WorkspaceDeleteBody
