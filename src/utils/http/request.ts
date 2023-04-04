// request.ts
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

import { OptimizedData, ResponseFailure, ResponseSuccess } from './optimized'
import type { RequestConfig } from './types'
class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
      req.headers.Authorization = 'Basic bGFtcF93ZWI6bGFtcF93ZWJfc2VjcmV0'
      // req.headers.token = 'Bearer'
      return req
    })
  }
  request<T>(config: RequestConfig): Promise<T> {
    const conf = OptimizedData(config)
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(conf)
        .then((res) => {
          if (ResponseSuccess) {
            const rep = ResponseSuccess(res)
            rep != 'error' ? resolve(rep) : reject(new Error('request error!'))
            return
          }
          resolve(res)
        })
        .catch((error: any) => {
          if (ResponseFailure) {
            ResponseFailure(error)
            return
          }
          reject(error)
        })
    })
  }
}

export default Request
