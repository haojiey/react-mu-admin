// types.ts
import type { AxiosHeaders, AxiosRequestConfig } from 'axios'

export interface RequestDataConfig {
  method: string
  url: string
  data?: Object
}

export interface Request {
  code: number
  status: number
  type: 'success' | 'error' | 'warning'
  message: string
  msg?: string
  data?: string
  error: string
}

export interface RequestConfig extends RequestDataConfig {
  params: object | undefined
}

export interface CreateOptions extends AxiosRequestConfig {
  url?: string
  method?: string
  baseURL?: string
  headers?: AxiosHeaders
  params?: any
  data?: any
  timeout?: number
  withCredentials?: boolean
}
