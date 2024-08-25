// Package docs Code generated by swaggo/swag. DO NOT EDIT
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/auth.login": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "authentication"
                ],
                "summary": "Login to the system",
                "operationId": "login",
                "parameters": [
                    {
                        "description": "LoginBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/LoginBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-string"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/auth.logout": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "authentication"
                ],
                "summary": "Logout from the system",
                "operationId": "logout",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.OkResponse"
                        }
                    }
                }
            }
        },
        "/auth.me": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "authentication"
                ],
                "summary": "Get current user in the system",
                "operationId": "me",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-CurrentUserResponse"
                        }
                    }
                }
            }
        },
        "/object.getObject": {
            "post": {
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "object"
                ],
                "summary": "Get object from the system",
                "operationId": "getObject",
                "parameters": [
                    {
                        "description": "Get Object Body",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/GetObjectBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-string"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/object.uploadObject": {
            "post": {
                "consumes": [
                    "multipart/form-data"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "object"
                ],
                "summary": "Upload object to the system",
                "operationId": "uploadObject",
                "parameters": [
                    {
                        "type": "file",
                        "description": "Video Interview File",
                        "name": "file",
                        "in": "formData",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "Bucket Name",
                        "name": "bucketName",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-string"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/user.createUser": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "Create new user",
                "operationId": "createUser",
                "parameters": [
                    {
                        "description": "CreateUserBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/UserCreateBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-User"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/user.deleteUser": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "Delete user",
                "operationId": "deleteUser",
                "parameters": [
                    {
                        "description": "DeleteUserBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/UserDeleteBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-string"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/userInWorkspace.create": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "userInWorkspace"
                ],
                "summary": "Add User To Workspace",
                "operationId": "AddUserToWorkspace",
                "parameters": [
                    {
                        "description": "AddUserToWorkspaceBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/AddUserToWorkspaceBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-UserInWorkspace"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/userInWorkspace.delete": {
            "delete": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "userInWorkspace"
                ],
                "summary": "Delete User From Workspace",
                "operationId": "DeleteUserFromWorkspace",
                "parameters": [
                    {
                        "description": "DeleteUserFromWorkspaceBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/DeleteUserFromWorkspaceBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-UserInWorkspace"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/videoInterview.getVideoInterviewContext": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "videoInterview"
                ],
                "summary": "Get video interview context",
                "operationId": "getVideoInterviewContext",
                "parameters": [
                    {
                        "type": "string",
                        "name": "lobbyId",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-VideoInterviewContextResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/videoInterview.getVideoInterviewQuestion": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "videoInterview"
                ],
                "summary": "Get video interview question",
                "operationId": "getVideoInterviewQuestion",
                "parameters": [
                    {
                        "type": "string",
                        "name": "lobbyId",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "name": "questionIndex",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-VideoInterviewQuestionResponse"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/videoInterview.submitVideoInterview": {
            "post": {
                "consumes": [
                    "multipart/form-data"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "videoInterview"
                ],
                "summary": "Submit video interview",
                "operationId": "submitVideoInterview",
                "parameters": [
                    {
                        "type": "file",
                        "description": "Video Interview File",
                        "name": "file",
                        "in": "formData",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-string"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/workspace.create": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "workspace"
                ],
                "summary": "Create new workspace",
                "operationId": "CreateWorkspace",
                "parameters": [
                    {
                        "description": "CreateWorkspaceBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/CreateWorkspaceBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-WorkspaceData"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/workspace.delete": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "workspace"
                ],
                "summary": "Delete workspace",
                "operationId": "DeleteWorkspace",
                "parameters": [
                    {
                        "description": "DeleteWorkspaceBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/DeleteWorkspaceBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-string"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/workspace.get": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "workspace"
                ],
                "summary": "Get workspace",
                "operationId": "GetWorkspace",
                "parameters": [
                    {
                        "description": "GetWorkspaceBody",
                        "name": "payload",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/GetWorkspaceBody"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-WorkspaceData"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        },
        "/workspace.getAll": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "workspace"
                ],
                "summary": "Get List of workspace",
                "operationId": "GetAllWorkspace",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/handlers.Response-array_WorkspaceData"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/handlers.ErrResponse"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "AddUserToWorkspaceBody": {
            "type": "object",
            "required": [
                "status",
                "user_id",
                "workspace_id"
            ],
            "properties": {
                "status": {
                    "type": "string"
                },
                "user_id": {
                    "type": "integer"
                },
                "workspace_id": {
                    "type": "integer"
                }
            }
        },
        "CreateWorkspaceBody": {
            "type": "object",
            "required": [
                "iscoding",
                "isvideo",
                "startdate",
                "stopdate",
                "title"
            ],
            "properties": {
                "iscoding": {
                    "type": "boolean"
                },
                "isvideo": {
                    "type": "boolean"
                },
                "startdate": {
                    "type": "string"
                },
                "stopdate": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "CurrentUserResponse": {
            "type": "object",
            "required": [
                "created_at",
                "id",
                "role",
                "updated_at",
                "username"
            ],
            "properties": {
                "created_at": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "role": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            }
        },
        "DeleteUserFromWorkspaceBody": {
            "type": "object",
            "required": [
                "user_id",
                "workspace_id"
            ],
            "properties": {
                "user_id": {
                    "type": "integer"
                },
                "workspace_id": {
                    "type": "integer"
                }
            }
        },
        "DeleteWorkspaceBody": {
            "type": "object",
            "required": [
                "id"
            ],
            "properties": {
                "id": {
                    "type": "integer"
                }
            }
        },
        "GetObjectBody": {
            "type": "object",
            "required": [
                "bucketName",
                "objectName"
            ],
            "properties": {
                "bucketName": {
                    "type": "string"
                },
                "objectName": {
                    "type": "string"
                }
            }
        },
        "GetWorkspaceBody": {
            "type": "object",
            "required": [
                "id"
            ],
            "properties": {
                "id": {
                    "type": "integer"
                }
            }
        },
        "LoginBody": {
            "type": "object",
            "required": [
                "password",
                "username"
            ],
            "properties": {
                "password": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            }
        },
        "User": {
            "type": "object",
            "properties": {
                "created_at": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "role": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            }
        },
        "UserCreateBody": {
            "type": "object",
            "required": [
                "password",
                "role",
                "username"
            ],
            "properties": {
                "password": {
                    "type": "string"
                },
                "role": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            }
        },
        "UserDeleteBody": {
            "type": "object",
            "required": [
                "id"
            ],
            "properties": {
                "id": {
                    "type": "integer"
                }
            }
        },
        "UserInWorkspace": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "isInterest": {
                    "type": "boolean"
                },
                "status": {
                    "type": "string"
                },
                "userId": {
                    "type": "integer"
                },
                "workspaceId": {
                    "type": "integer"
                }
            }
        },
        "VideoInterviewContextResponse": {
            "type": "object",
            "required": [
                "questionSetting",
                "totalQuestions"
            ],
            "properties": {
                "questionSetting": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/VideoInterviewQuestionSetting"
                    }
                },
                "totalQuestions": {
                    "type": "integer"
                }
            }
        },
        "VideoInterviewQuestionResponse": {
            "type": "object",
            "required": [
                "question",
                "questionIndex"
            ],
            "properties": {
                "question": {
                    "type": "string"
                },
                "questionIndex": {
                    "type": "integer"
                }
            }
        },
        "VideoInterviewQuestionSetting": {
            "type": "object",
            "required": [
                "isLast",
                "questionIndex",
                "retry",
                "timeToAnswer",
                "timeToPrepare"
            ],
            "properties": {
                "isLast": {
                    "type": "boolean"
                },
                "questionIndex": {
                    "type": "integer"
                },
                "retry": {
                    "type": "integer"
                },
                "timeToAnswer": {
                    "type": "integer"
                },
                "timeToPrepare": {
                    "type": "integer"
                }
            }
        },
        "WorkspaceData": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "iscoding": {
                    "type": "boolean"
                },
                "isvideo": {
                    "type": "boolean"
                },
                "membernum": {
                    "type": "integer"
                },
                "owner": {
                    "type": "integer"
                },
                "startdate": {
                    "type": "string"
                },
                "stopdate": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "handlers.ErrResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.OkResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-CurrentUserResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "$ref": "#/definitions/CurrentUserResponse"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-User": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "$ref": "#/definitions/User"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-UserInWorkspace": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "$ref": "#/definitions/UserInWorkspace"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-VideoInterviewContextResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "$ref": "#/definitions/VideoInterviewContextResponse"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-VideoInterviewQuestionResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "$ref": "#/definitions/VideoInterviewQuestionResponse"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-WorkspaceData": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "$ref": "#/definitions/WorkspaceData"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-array_WorkspaceData": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/WorkspaceData"
                    }
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        },
        "handlers.Response-string": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                },
                "timestamp": {
                    "type": "string"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0",
	Host:             "",
	BasePath:         "/api",
	Schemes:          []string{},
	Title:            "Interv API",
	Description:      "",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
	LeftDelim:        "{{",
	RightDelim:       "}}",
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
