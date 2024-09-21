/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type CreateUserData = HandlersResponseUser

export type CreateUserError = HandlersErrResponse

export interface CreateVideoQuestionBody {
  retryAmount: number
  timeToAnswer: number
  timeToPrepare: number
  title: string
  workspaceId: number
}

export type CreateVideoQuestionData = HandlersResponseCreateVideoQuestionResponse

export type CreateVideoQuestionError = HandlersErrResponse

export interface CreateVideoQuestionResponse {
  createdAt?: string
  id?: number
  retryAmount?: number
  timeToAnswer?: number
  timeToPrepare?: number
  title?: string
  updatedAt?: string
  workspaceId?: number
}

export interface CurrentUserResponse {
  created_at: string
  id: number
  role: string
  updated_at: string
  username: string
}

export type DeleteUserData = HandlersResponseString

export type DeleteUserError = HandlersErrResponse

export type DeleteVideoQuestionByIdData = HandlersResponseString

export type DeleteVideoQuestionByIdError = HandlersErrResponse

export interface DeleteVideoQuestionByIdParams {
  id: number
}

export type GetLobbyContextData = HandlersResponseGetLobbyContextResponse

export type GetLobbyContextError = HandlersErrResponse

export interface GetLobbyContextParams {
  lobbyId: number
}

export interface GetLobbyContextResponse {
  dueDate: string
  isCodingDone: boolean
  isVideoDone: boolean
  lobbyId: number
  totalCodingQuestion: number
  totalCodingTime: number
  totalVideoQuestion: number
  totalVideoTime: number
  userId: number
}

export interface GetObjectBody {
  bucketName: string
  objectName: string
}

export type GetObjectData = HandlersResponseString

export type GetObjectError = HandlersErrResponse

export type GetVideoInterviewContextData = HandlersResponseVideoInterviewContextResponse

export type GetVideoInterviewContextError = HandlersErrResponse

export interface GetVideoInterviewContextParams {
  lobbyId: number
}

export type GetVideoInterviewQuestionData = HandlersResponseVideoInterviewQuestionResponse

export type GetVideoInterviewQuestionError = HandlersErrResponse

export interface GetVideoInterviewQuestionParams {
  questionId: number
}

export type GetVideoQuestionByIdData = HandlersResponseGetVideoQuestionByIdResponse

export type GetVideoQuestionByIdError = HandlersErrResponse

export interface GetVideoQuestionByIdParams {
  id: string
}

export interface GetVideoQuestionByIdResponse {
  createdAt?: string
  id?: number
  retryAmount?: number
  timeToAnswer?: number
  timeToPrepare?: number
  title?: string
  updatedAt?: string
  workspaceId?: number
}

export type GetVideoQuestionByWorkspaceIdData = HandlersResponseArrayGetVideoQuestionByIdResponse[]

export type GetVideoQuestionByWorkspaceIdError = HandlersErrResponse

export interface GetVideoQuestionByWorkspaceIdParams {
  id: string
}

export interface HandlersErrResponse {
  code?: number
  message?: string
  timestamp?: string
}

export enum HandlersMailPreset {
  Invite = "invite",
  Finish = "finish",
}

export interface HandlersOkResponse {
  code?: number
  message?: string
  timestamp?: string
}

export interface HandlersResponseArrayGetVideoQuestionByIdResponse {
  code?: number
  data?: GetVideoQuestionByIdResponse[]
  message?: string
  timestamp?: string
}

export interface HandlersResponseCreateVideoQuestionResponse {
  code?: number
  data?: CreateVideoQuestionResponse
  message?: string
  timestamp?: string
}

export interface HandlersResponseCurrentUserResponse {
  code?: number
  data?: CurrentUserResponse
  message?: string
  timestamp?: string
}

export interface HandlersResponseGetLobbyContextResponse {
  code?: number
  data?: GetLobbyContextResponse
  message?: string
  timestamp?: string
}

export interface HandlersResponseGetVideoQuestionByIdResponse {
  code?: number
  data?: GetVideoQuestionByIdResponse
  message?: string
  timestamp?: string
}

export interface HandlersResponseString {
  code?: number
  data?: string
  message?: string
  timestamp?: string
}

export interface HandlersResponseUser {
  code?: number
  data?: User
  message?: string
  timestamp?: string
}

export interface HandlersResponseVideoInterviewContextResponse {
  code?: number
  data?: VideoInterviewContextResponse
  message?: string
  timestamp?: string
}

export interface HandlersResponseVideoInterviewQuestionResponse {
  code?: number
  data?: VideoInterviewQuestionResponse
  message?: string
  timestamp?: string
}

export interface LoginBody {
  password: string
  username: string
}

export type LoginData = HandlersResponseString

export type LoginError = HandlersErrResponse

export type LogoutData = HandlersOkResponse

export interface MailObject {
  dueDate?: string
  link?: string
  name: string
  to: string
}

export type MeData = HandlersResponseCurrentUserResponse

export interface SendMailBody {
  mailList: MailObject[]
  preset: HandlersMailPreset
}

export type SendMailData = HandlersResponseString

export type SendMailError = HandlersErrResponse

export type SubmitVideoInterviewData = HandlersResponseString

export type SubmitVideoInterviewError = HandlersErrResponse

export interface SubmitVideoInterviewPayload {
  /**
   * Video Interview File
   * @format binary
   */
  file: File
}

export interface UpdateLobbyContextBody {
  dueDate?: string
  isCodingDone?: boolean
  isVideoDone?: boolean
  lobbyId: number
  totalCodingQuestion?: number
  totalCodingTime?: number
  totalVideoQuestion?: number
  totalVideoTime?: number
  userId?: number
}

export type UpdateLobbyContextData = HandlersResponseString

export type UpdateLobbyContextError = HandlersErrResponse

export interface UpdateVideoQuestionBody {
  id: number
  retryAmount?: number
  timeToAnswer?: number
  timeToPrepare?: number
  title?: string
  workspaceId?: number
}

export type UpdateVideoQuestionData = HandlersResponseCreateVideoQuestionResponse

export type UpdateVideoQuestionError = HandlersErrResponse

export type UploadObjectData = HandlersResponseString

export type UploadObjectError = HandlersErrResponse

export interface UploadObjectPayload {
  /** Bucket Name */
  bucketName: string
  /**
   * Video Interview File
   * @format binary
   */
  file: File
}

export interface User {
  created_at?: string
  id?: number
  role?: string
  updated_at?: string
  username?: string
}

export interface UserCreateBody {
  password: string
  role: string
  username: string
}

export interface UserDeleteBody {
  id: number
}

export interface VideoInterviewContextResponse {
  questionSetting: VideoInterviewQuestionSetting[]
  totalQuestions: number
}

export interface VideoInterviewQuestionResponse {
  question: string
  questionId: number
}

export interface VideoInterviewQuestionSetting {
  isLast: boolean
  questionId: number
  questionIndex: number
  retry: number
  timeToAnswer: number
  timeToPrepare: number
}

export namespace Authentication {
  /**
   * No description
   * @tags authentication
   * @name Login
   * @summary Login to the system
   * @request POST:/auth.login
   * @response `200` `LoginData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace Login {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = LoginBody
    export type RequestHeaders = {}
    export type ResponseBody = LoginData
  }

  /**
   * No description
   * @tags authentication
   * @name Logout
   * @summary Logout from the system
   * @request POST:/auth.logout
   * @response `200` `LogoutData` OK
   */
  export namespace Logout {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = LogoutData
  }

  /**
   * No description
   * @tags authentication
   * @name Me
   * @summary Get current user in the system
   * @request GET:/auth.me
   * @response `200` `MeData` OK
   */
  export namespace Me {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = MeData
  }
}

export namespace Lobby {
  /**
   * No description
   * @tags lobby
   * @name GetLobbyContext
   * @summary Get lobby context
   * @request GET:/lobby.getLobbyContext
   * @response `200` `GetLobbyContextData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetLobbyContext {
    export type RequestParams = {}
    export type RequestQuery = {
      lobbyId: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetLobbyContextData
  }

  /**
   * No description
   * @tags lobby
   * @name UpdateLobbyContext
   * @summary Update lobby context
   * @request POST:/lobby.updateLobbyContext
   * @response `200` `UpdateLobbyContextData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace UpdateLobbyContext {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = UpdateLobbyContextBody
    export type RequestHeaders = {}
    export type ResponseBody = UpdateLobbyContextData
  }
}

export namespace Mail {
  /**
   * No description
   * @tags mail
   * @name SendMail
   * @summary Send mail to the user
   * @request POST:/mail.sendMail
   * @response `200` `SendMailData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace SendMail {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = SendMailBody
    export type RequestHeaders = {}
    export type ResponseBody = SendMailData
  }
}

export namespace Object {
  /**
   * No description
   * @tags object
   * @name GetObject
   * @summary Get object from the system
   * @request POST:/object.getObject
   * @response `200` `GetObjectData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetObject {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = GetObjectBody
    export type RequestHeaders = {}
    export type ResponseBody = GetObjectData
  }

  /**
   * No description
   * @tags object
   * @name UploadObject
   * @summary Upload object to the system
   * @request POST:/object.uploadObject
   * @response `200` `UploadObjectData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace UploadObject {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = UploadObjectPayload
    export type RequestHeaders = {}
    export type ResponseBody = UploadObjectData
  }
}

export namespace VideoQuestion {
  /**
   * No description
   * @tags videoQuestion
   * @name CreateVideoQuestion
   * @summary Create new video question
   * @request POST:/question.createVideoQuestion
   * @response `200` `CreateVideoQuestionData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace CreateVideoQuestion {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateVideoQuestionBody
    export type RequestHeaders = {}
    export type ResponseBody = CreateVideoQuestionData
  }

  /**
   * No description
   * @tags videoQuestion
   * @name DeleteVideoQuestionById
   * @summary Delete video question by id
   * @request POST:/question.deleteVideoQuestionById
   * @response `200` `DeleteVideoQuestionByIdData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `404` `HandlersErrResponse` Not Found
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace DeleteVideoQuestionById {
    export type RequestParams = {}
    export type RequestQuery = {
      id: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = DeleteVideoQuestionByIdData
  }

  /**
   * No description
   * @tags videoQuestion
   * @name GetVideoQuestionById
   * @summary Get video question by id
   * @request GET:/question.getVideoQuestionById/{id}
   * @response `200` `GetVideoQuestionByIdData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `404` `HandlersErrResponse` Not Found
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetVideoQuestionById {
    export type RequestParams = {
      id: string
    }
    export type RequestQuery = {
      id: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetVideoQuestionByIdData
  }

  /**
   * No description
   * @tags videoQuestion
   * @name GetVideoQuestionByWorkspaceId
   * @summary Get video question by workspace id
   * @request GET:/question.getVideoQuestionWorkspaceIdId/{id}
   * @response `200` `GetVideoQuestionByWorkspaceIdData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `404` `HandlersErrResponse` Not Found
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetVideoQuestionByWorkspaceId {
    export type RequestParams = {
      id: string
    }
    export type RequestQuery = {
      id: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetVideoQuestionByWorkspaceIdData
  }

  /**
   * No description
   * @tags videoQuestion
   * @name UpdateVideoQuestion
   * @summary Update video question
   * @request POST:/question.updateVideoQuestion
   * @response `200` `UpdateVideoQuestionData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `404` `HandlersErrResponse` Not Found
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace UpdateVideoQuestion {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = UpdateVideoQuestionBody
    export type RequestHeaders = {}
    export type ResponseBody = UpdateVideoQuestionData
  }
}

export namespace User {
  /**
   * No description
   * @tags user
   * @name CreateUser
   * @summary Create new user
   * @request POST:/user.createUser
   * @response `200` `CreateUserData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace CreateUser {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = UserCreateBody
    export type RequestHeaders = {}
    export type ResponseBody = CreateUserData
  }

  /**
   * No description
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request POST:/user.deleteUser
   * @response `200` `DeleteUserData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace DeleteUser {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = UserDeleteBody
    export type RequestHeaders = {}
    export type ResponseBody = DeleteUserData
  }
}

export namespace VideoInterview {
  /**
   * No description
   * @tags videoInterview
   * @name GetVideoInterviewContext
   * @summary Get video interview context
   * @request GET:/videoInterview.getVideoInterviewContext
   * @response `200` `GetVideoInterviewContextData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetVideoInterviewContext {
    export type RequestParams = {}
    export type RequestQuery = {
      lobbyId: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetVideoInterviewContextData
  }

  /**
   * No description
   * @tags videoInterview
   * @name GetVideoInterviewQuestion
   * @summary Get video interview question
   * @request GET:/videoInterview.getVideoInterviewQuestion
   * @response `200` `GetVideoInterviewQuestionData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetVideoInterviewQuestion {
    export type RequestParams = {}
    export type RequestQuery = {
      questionId: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetVideoInterviewQuestionData
  }

  /**
   * No description
   * @tags videoInterview
   * @name SubmitVideoInterview
   * @summary Submit video interview
   * @request POST:/videoInterview.submitVideoInterview
   * @response `200` `SubmitVideoInterviewData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace SubmitVideoInterview {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = SubmitVideoInterviewPayload
    export type RequestHeaders = {}
    export type ResponseBody = SubmitVideoInterviewData
  }
}

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from "axios"
import axios from "axios"

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"]
  private secure?: boolean
  private format?: ResponseType

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "/api" })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body)
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data)
  }
}

/**
 * @title Interv API
 * @version 1.0
 * @baseUrl /api
 * @contact
 */
export class Server<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  authentication = {
    /**
     * No description
     *
     * @tags authentication
     * @name Login
     * @summary Login to the system
     * @request POST:/auth.login
     * @response `200` `LoginData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    login: (payload: LoginBody, params: RequestParams = {}) =>
      this.request<LoginData, LoginError>({
        path: `/auth.login`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags authentication
     * @name Logout
     * @summary Logout from the system
     * @request POST:/auth.logout
     * @response `200` `LogoutData` OK
     */
    logout: (params: RequestParams = {}) =>
      this.request<LogoutData, any>({
        path: `/auth.logout`,
        method: "POST",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags authentication
     * @name Me
     * @summary Get current user in the system
     * @request GET:/auth.me
     * @response `200` `MeData` OK
     */
    me: (params: RequestParams = {}) =>
      this.request<MeData, any>({
        path: `/auth.me`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  lobby = {
    /**
     * No description
     *
     * @tags lobby
     * @name GetLobbyContext
     * @summary Get lobby context
     * @request GET:/lobby.getLobbyContext
     * @response `200` `GetLobbyContextData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getLobbyContext: (query: GetLobbyContextParams, params: RequestParams = {}) =>
      this.request<GetLobbyContextData, GetLobbyContextError>({
        path: `/lobby.getLobbyContext`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lobby
     * @name UpdateLobbyContext
     * @summary Update lobby context
     * @request POST:/lobby.updateLobbyContext
     * @response `200` `UpdateLobbyContextData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    updateLobbyContext: (payload: UpdateLobbyContextBody, params: RequestParams = {}) =>
      this.request<UpdateLobbyContextData, UpdateLobbyContextError>({
        path: `/lobby.updateLobbyContext`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  mail = {
    /**
     * No description
     *
     * @tags mail
     * @name SendMail
     * @summary Send mail to the user
     * @request POST:/mail.sendMail
     * @response `200` `SendMailData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    sendMail: (payload: SendMailBody, params: RequestParams = {}) =>
      this.request<SendMailData, SendMailError>({
        path: `/mail.sendMail`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  object = {
    /**
     * No description
     *
     * @tags object
     * @name GetObject
     * @summary Get object from the system
     * @request POST:/object.getObject
     * @response `200` `GetObjectData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getObject: (payload: GetObjectBody, params: RequestParams = {}) =>
      this.request<GetObjectData, GetObjectError>({
        path: `/object.getObject`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags object
     * @name UploadObject
     * @summary Upload object to the system
     * @request POST:/object.uploadObject
     * @response `200` `UploadObjectData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    uploadObject: (data: UploadObjectPayload, params: RequestParams = {}) =>
      this.request<UploadObjectData, UploadObjectError>({
        path: `/object.uploadObject`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  }
  videoQuestion = {
    /**
     * No description
     *
     * @tags videoQuestion
     * @name CreateVideoQuestion
     * @summary Create new video question
     * @request POST:/question.createVideoQuestion
     * @response `200` `CreateVideoQuestionData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    createVideoQuestion: (payload: CreateVideoQuestionBody, params: RequestParams = {}) =>
      this.request<CreateVideoQuestionData, CreateVideoQuestionError>({
        path: `/question.createVideoQuestion`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videoQuestion
     * @name DeleteVideoQuestionById
     * @summary Delete video question by id
     * @request POST:/question.deleteVideoQuestionById
     * @response `200` `DeleteVideoQuestionByIdData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `404` `HandlersErrResponse` Not Found
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    deleteVideoQuestionById: (query: DeleteVideoQuestionByIdParams, params: RequestParams = {}) =>
      this.request<DeleteVideoQuestionByIdData, DeleteVideoQuestionByIdError>({
        path: `/question.deleteVideoQuestionById`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videoQuestion
     * @name GetVideoQuestionById
     * @summary Get video question by id
     * @request GET:/question.getVideoQuestionById/{id}
     * @response `200` `GetVideoQuestionByIdData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `404` `HandlersErrResponse` Not Found
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getVideoQuestionById: ({ id, ...query }: GetVideoQuestionByIdParams, params: RequestParams = {}) =>
      this.request<GetVideoQuestionByIdData, GetVideoQuestionByIdError>({
        path: `/question.getVideoQuestionById/${id}`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videoQuestion
     * @name GetVideoQuestionByWorkspaceId
     * @summary Get video question by workspace id
     * @request GET:/question.getVideoQuestionWorkspaceIdId/{id}
     * @response `200` `GetVideoQuestionByWorkspaceIdData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `404` `HandlersErrResponse` Not Found
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getVideoQuestionByWorkspaceId: (
      { id, ...query }: GetVideoQuestionByWorkspaceIdParams,
      params: RequestParams = {},
    ) =>
      this.request<GetVideoQuestionByWorkspaceIdData, GetVideoQuestionByWorkspaceIdError>({
        path: `/question.getVideoQuestionWorkspaceIdId/${id}`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videoQuestion
     * @name UpdateVideoQuestion
     * @summary Update video question
     * @request POST:/question.updateVideoQuestion
     * @response `200` `UpdateVideoQuestionData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `404` `HandlersErrResponse` Not Found
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    updateVideoQuestion: (payload: UpdateVideoQuestionBody, params: RequestParams = {}) =>
      this.request<UpdateVideoQuestionData, UpdateVideoQuestionError>({
        path: `/question.updateVideoQuestion`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  user = {
    /**
     * No description
     *
     * @tags user
     * @name CreateUser
     * @summary Create new user
     * @request POST:/user.createUser
     * @response `200` `CreateUserData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    createUser: (payload: UserCreateBody, params: RequestParams = {}) =>
      this.request<CreateUserData, CreateUserError>({
        path: `/user.createUser`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name DeleteUser
     * @summary Delete user
     * @request POST:/user.deleteUser
     * @response `200` `DeleteUserData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    deleteUser: (payload: UserDeleteBody, params: RequestParams = {}) =>
      this.request<DeleteUserData, DeleteUserError>({
        path: `/user.deleteUser`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
  videoInterview = {
    /**
     * No description
     *
     * @tags videoInterview
     * @name GetVideoInterviewContext
     * @summary Get video interview context
     * @request GET:/videoInterview.getVideoInterviewContext
     * @response `200` `GetVideoInterviewContextData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getVideoInterviewContext: (query: GetVideoInterviewContextParams, params: RequestParams = {}) =>
      this.request<GetVideoInterviewContextData, GetVideoInterviewContextError>({
        path: `/videoInterview.getVideoInterviewContext`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videoInterview
     * @name GetVideoInterviewQuestion
     * @summary Get video interview question
     * @request GET:/videoInterview.getVideoInterviewQuestion
     * @response `200` `GetVideoInterviewQuestionData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getVideoInterviewQuestion: (query: GetVideoInterviewQuestionParams, params: RequestParams = {}) =>
      this.request<GetVideoInterviewQuestionData, GetVideoInterviewQuestionError>({
        path: `/videoInterview.getVideoInterviewQuestion`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videoInterview
     * @name SubmitVideoInterview
     * @summary Submit video interview
     * @request POST:/videoInterview.submitVideoInterview
     * @response `200` `SubmitVideoInterviewData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    submitVideoInterview: (data: SubmitVideoInterviewPayload, params: RequestParams = {}) =>
      this.request<SubmitVideoInterviewData, SubmitVideoInterviewError>({
        path: `/videoInterview.submitVideoInterview`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  }
}
