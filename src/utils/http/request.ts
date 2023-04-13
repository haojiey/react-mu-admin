// request.ts
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import { OptimizedData, RequestBefore, ResponseFailure, ResponseSuccess } from './optimized'
import type { RequestConfig, Result } from './types'
class Request {
    instance: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)

        this.instance.interceptors.request.use(RequestBefore)
    }
    request<T = any>(config: RequestConfig): Promise<T> {
        const conf = OptimizedData(config)
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, AxiosResponse<Result>>(conf)
                .then((res: AxiosResponse<Result>) => {
                    if (ResponseSuccess) {
                        const rep = ResponseSuccess(res)
                        rep != 'error' ? resolve(rep) : reject(new Error('request error!'))
                        return
                    }
                    resolve(res as unknown as Promise<T>)
                })
                .catch((error: any) => {
                    if (ResponseFailure) {
                        const e: string = ResponseFailure(error)
                        reject(e)
                        return
                    }
                    reject(error)
                })
        })
    }
}

export default Request
