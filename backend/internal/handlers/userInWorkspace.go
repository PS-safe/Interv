package handlers

type UserInWorkspace struct {
	ID          uint
	UserId      uint
	WorkspaceId uint
	Status      string
	IsInterest  bool
}

type AddUserToWorkspaceBody struct {
	UserId      uint   `json:"user_id" validate:"required"`
	WorkspaceId uint   `json:"workspace_id" validate:"required"`
	Status      string `json:"status" validate:"required"`
} // @name AddUserToWorkspaceBody

type DeleteUserFromWorkspaceBody struct {
	UserId      uint `json:"user_id" validate:"required"`
	WorkspaceId uint `json:"workspace_id" validate:"required"`
} // @name DeleteUserFromWorkspaceBody
