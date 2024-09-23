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

export interface CreateWorkspaceBody {
  isCoding: boolean
  isVideo: boolean
  startDate: string
  stopDate: string
  title: string
}

export type CreateWorkspaceData = HandlersResponseWorkspaceDetail

export type CreateWorkspaceError = HandlersErrResponse

export interface CurrentUserResponse {
  created_at: string
  id: number
  role: string
  updated_at: string
  username: string
}

export type DeleteUserData = HandlersResponseString

export type DeleteUserError = HandlersErrResponse

export interface DeleteUserFromWorkspaceBody {
  userId: number
  workspaceId: number
}

export type DeleteUserFromWorkspaceData = HandlersResponseUserInWorkspace

export type DeleteUserFromWorkspaceError = HandlersErrResponse

export interface DeleteWorkspaceBody {
  id: number
}

export type DeleteWorkspaceByIdData = HandlersResponseString

export type DeleteWorkspaceByIdError = HandlersErrResponse

export type GetAllWorkspaceData = HandlersResponseArrayWorkspaceDetail

export type GetAllWorkspaceError = HandlersErrResponse

export interface GetObjectBody {
  bucketName: string
  objectName: string
}

export type GetObjectData = HandlersResponseString

export type GetObjectError = HandlersErrResponse

export type GetUserInWorkspaceData = HandlersResponseArrayUserInWorkspace

export type GetUserInWorkspaceError = HandlersErrResponse

export interface GetUserInWorkspaceParams {
  id: number
}

export type GetVideoInterviewContextData = HandlersResponseVideoInterviewContextResponse

export type GetVideoInterviewContextError = HandlersErrResponse

export interface GetVideoInterviewContextParams {
  lobbyId: string
}

export type GetVideoInterviewQuestionData = HandlersResponseVideoInterviewQuestionResponse

export type GetVideoInterviewQuestionError = HandlersErrResponse

export interface GetVideoInterviewQuestionParams {
  lobbyId: string
  questionIndex: number
}

export type GetWorkspaceData = HandlersResponseWorkspaceData

export type GetWorkspaceError = HandlersErrResponse

export interface GetWorkspaceParams {
  id: number
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

export interface HandlersResponseArrayUserInWorkspace {
  code?: number
  data?: UserInWorkspace[]
  message?: string
  timestamp?: string
}

export interface HandlersResponseArrayWorkspaceDetail {
  code?: number
  data?: WorkspaceDetail[]
  message?: string
  timestamp?: string
}

export interface HandlersResponseCurrentUserResponse {
  code?: number
  data?: CurrentUserResponse
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

export interface HandlersResponseUserInWorkspace {
  code?: number
  data?: UserInWorkspace
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

export interface HandlersResponseWorkspaceData {
  code?: number
  data?: WorkspaceData
  message?: string
  timestamp?: string
}

export interface HandlersResponseWorkspaceDetail {
  code?: number
  data?: WorkspaceDetail
  message?: string
  timestamp?: string
}

export interface IndividualUser {
  id: number
  userData: User
  userInWorkspace: UserInWorkspace
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
  name?: string
  role?: string
  updated_at?: string
  username?: string
}

export type UserCreateBody = object

export interface UserDeleteBody {
  id: number
}

export interface UserInWorkspace {
  Id: number
  IsInterest: boolean
  Status: string
  UserId: number
  WorkspaceId: number
}

export interface VideoInterviewContextResponse {
  questionSetting: VideoInterviewQuestionSetting[]
  totalQuestions: number
}

export interface VideoInterviewQuestionResponse {
  question: string
  questionIndex: number
}

export interface VideoInterviewQuestionSetting {
  isLast: boolean
  questionIndex: number
  retry: number
  timeToAnswer: number
  timeToPrepare: number
}

export interface WorkspaceData {
  individualUser: IndividualUser[]
  workspaceDetail: WorkspaceDetail
}

export interface WorkspaceDetail {
  id?: number
  isCoding?: boolean
  isVideo?: boolean
  memberNum?: number
  owner?: number
  startDate?: string
  stopDate?: string
  title?: string
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

export namespace UserInWorkspace {
  /**
   * No description
   * @tags userInWorkspace
   * @name DeleteUserFromWorkspace
   * @summary Delete User From Workspace
   * @request DELETE:/userInWorkspace.delete
   * @response `200` `DeleteUserFromWorkspaceData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace DeleteUserFromWorkspace {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = DeleteUserFromWorkspaceBody
    export type RequestHeaders = {}
    export type ResponseBody = DeleteUserFromWorkspaceData
  }

  /**
   * No description
   * @tags userInWorkspace
   * @name GetUserInWorkspace
   * @summary Get user In Workspace
   * @request GET:/userInWorkspace.get
   * @response `200` `GetUserInWorkspaceData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetUserInWorkspace {
    export type RequestParams = {}
    export type RequestQuery = {
      id: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetUserInWorkspaceData
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
      lobbyId: string
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
      lobbyId: string
      questionIndex: number
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

export namespace Workspace {
  /**
   * No description
   * @tags workspace
   * @name CreateWorkspace
   * @summary Create new workspace
   * @request POST:/workspace.create
   * @response `200` `CreateWorkspaceData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace CreateWorkspace {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateWorkspaceBody
    export type RequestHeaders = {}
    export type ResponseBody = CreateWorkspaceData
  }

  /**
   * No description
   * @tags workspace
   * @name DeleteWorkspaceById
   * @summary Delete workspace By Id
   * @request POST:/workspace.delete
   * @response `200` `DeleteWorkspaceByIdData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace DeleteWorkspaceById {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = DeleteWorkspaceBody
    export type RequestHeaders = {}
    export type ResponseBody = DeleteWorkspaceByIdData
  }

  /**
   * No description
   * @tags workspace
   * @name GetAllWorkspace
   * @summary Get List of workspace
   * @request GET:/workspace.getAll
   * @response `200` `GetAllWorkspaceData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetAllWorkspace {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetAllWorkspaceData
  }

  /**
   * No description
   * @tags workspace
   * @name GetWorkspace
   * @summary Get workspace
   * @request GET:/workspace.get
   * @response `200` `GetWorkspaceData` OK
   * @response `400` `HandlersErrResponse` Bad Request
   * @response `500` `HandlersErrResponse` Internal Server Error
   */
  export namespace GetWorkspace {
    export type RequestParams = {}
    export type RequestQuery = {
      id: number
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = GetWorkspaceData
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
  userInWorkspace = {
    /**
     * No description
     *
     * @tags userInWorkspace
     * @name DeleteUserFromWorkspace
     * @summary Delete User From Workspace
     * @request DELETE:/userInWorkspace.delete
     * @response `200` `DeleteUserFromWorkspaceData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    deleteUserFromWorkspace: (payload: DeleteUserFromWorkspaceBody, params: RequestParams = {}) =>
      this.request<DeleteUserFromWorkspaceData, DeleteUserFromWorkspaceError>({
        path: `/userInWorkspace.delete`,
        method: "DELETE",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags userInWorkspace
     * @name GetUserInWorkspace
     * @summary Get user In Workspace
     * @request GET:/userInWorkspace.get
     * @response `200` `GetUserInWorkspaceData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getUserInWorkspace: (query: GetUserInWorkspaceParams, params: RequestParams = {}) =>
      this.request<GetUserInWorkspaceData, GetUserInWorkspaceError>({
        path: `/userInWorkspace.get`,
        method: "GET",
        query: query,
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
  workspace = {
    /**
     * No description
     *
     * @tags workspace
     * @name CreateWorkspace
     * @summary Create new workspace
     * @request POST:/workspace.create
     * @response `200` `CreateWorkspaceData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    createWorkspace: (payload: CreateWorkspaceBody, params: RequestParams = {}) =>
      this.request<CreateWorkspaceData, CreateWorkspaceError>({
        path: `/workspace.create`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags workspace
     * @name DeleteWorkspaceById
     * @summary Delete workspace By Id
     * @request POST:/workspace.delete
     * @response `200` `DeleteWorkspaceByIdData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    deleteWorkspaceById: (payload: DeleteWorkspaceBody, params: RequestParams = {}) =>
      this.request<DeleteWorkspaceByIdData, DeleteWorkspaceByIdError>({
        path: `/workspace.delete`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags workspace
     * @name GetAllWorkspace
     * @summary Get List of workspace
     * @request GET:/workspace.getAll
     * @response `200` `GetAllWorkspaceData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getAllWorkspace: (params: RequestParams = {}) =>
      this.request<GetAllWorkspaceData, GetAllWorkspaceError>({
        path: `/workspace.getAll`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags workspace
     * @name GetWorkspace
     * @summary Get workspace
     * @request GET:/workspace.get
     * @response `200` `GetWorkspaceData` OK
     * @response `400` `HandlersErrResponse` Bad Request
     * @response `500` `HandlersErrResponse` Internal Server Error
     */
    getWorkspace: (query: GetWorkspaceParams, params: RequestParams = {}) =>
      this.request<GetWorkspaceData, GetWorkspaceError>({
        path: `/workspace.get`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  }
}
