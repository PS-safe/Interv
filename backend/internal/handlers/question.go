package handlers

import "time"

type CreateQuestionBody struct {
	Title         string `json:"title" validate:"required"`
	TimeToPrepare uint   `json:"timeToPrepare" validate:"required"`
	TimeToAnswer  uint   `json:"timeToAnswer" validate:"required"`
	RetryAmount   uint   `json:"retryAmount" validate:"required"`
	PortalId      uint   `json:"portalId" validate:"required"`
} // @name CreateQuestionBody

type CreateQuestionResponse struct {
	ID            uint      `json:"id"`
	Title         string    `json:"title"`
	TimeToPrepare uint      `json:"timeToPrepare"`
	TimeToAnswer  uint      `json:"timeToAnswer"`
	RetryAmount   uint      `json:"retryAmount"`
	PortalId      uint      `json:"portalId"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
} // @name CreateQuestionResponse

type GetQuestionByIdParam struct {
	ID uint `json:"id" validate:"required"`
} // @name GetQuestionByIdParam

type GetQuestionByIdResponse struct {
	ID            uint      `json:"id"`
	Title         string    `json:"title"`
	TimeToPrepare uint      `json:"timeToPrepare"`
	TimeToAnswer  uint      `json:"timeToAnswer"`
	RetryAmount   uint      `json:"retryAmount"`
	PortalId      uint      `json:"portalId"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
} // @name GetQuestionByIdResponse

type GetQuestionByPortalIdParam struct {
	ID uint `json:"id" validate:"required"`
} // @name GetQuestionByPortalIdParam

type GetQuestionByPortalIdResponse struct {
	ID            uint      `json:"id"`
	Title         string    `json:"title"`
	TimeToPrepare uint      `json:"timeToPrepare"`
	TimeToAnswer  uint      `json:"timeToAnswer"`
	RetryAmount   uint      `json:"retryAmount"`
	PortalId      uint      `json:"portalId"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
} // @name GetQuestionByPortalIdResponse

type UpdateQuestionBody struct {
	ID            uint   `json:"id" validate:"required"`
	Title         string `json:"title"`
	TimeToPrepare uint   `json:"timeToPrepare"`
	TimeToAnswer  uint   `json:"timeToAnswer"`
	RetryAmount   uint   `json:"retryAmount"`
	PortalId      uint   `json:"portalId"`
} // @name UpdateQuestionBody

type UpdateQuestionResponse struct {
	ID            uint   `json:"id"`
	Title         string `json:"title"`
	TimeToPrepare uint   `json:"timeToPrepare"`
	TimeToAnswer  uint   `json:"timeToAnswer"`
	RetryAmount   uint   `json:"retryAmount"`
	PortalId      uint   `json:"portalId"`
} // @name UpdateQuestionResponse

type DeleteQuestionByIdBody struct {
	ID uint `json:"id" validate:"required"`
} // @name DeleteQuestionByIdParam
