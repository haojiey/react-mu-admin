import type { InternalAxiosRequestConfig } from 'axios'

import { RequestConfig } from './types'

import { HttpEnum } from '/@/enum/http'
import { MenuEnum } from '/@/enum/menu'
import { useMessage } from '/@/hooks/message'
import { clearPersistor } from '/@/redux/index'
import { store } from '/@/redux/index'
import { isString } from '/@/utils/is'
const { uesErrorMsg } = useMessage()
export function OptimizedData(config: RequestConfig) {
    let { data, method } = config

    if (method == 'get' || method == 'delete') {
        const t = {
            _t: new Date().getTime()
        }
        if (!isString(data)) {
            config.params = Object.assign(data || {}, t)
            config.data = undefined
        } else {
            config.url = config.url + data + `?_t=${t._t}`
            config.params = undefined
        }
    } else {
        const params = filterNullParams(data || [])
        if (!isString(params)) {
            config.data = params
            config.params = undefined
        } else {
            config.url = config.url + params
            config.params = undefined
        }
    }
    return config
}

export function RequestBefore(req: InternalAxiosRequestConfig) {
    const token = store.getState().user.token
    if (!token) {
        req.headers.token = token
    }
    return req
}

export function ResponseSuccess(res: any) {
    const { code, data } = res.data

    if (code === HttpEnum.SUCCESS) {
        return data
    }

    if (code === HttpEnum.OVERDUE) {
        uesErrorMsg('登陆超时,请重新登录!')
        clearPersistor()
        window.location.hash = MenuEnum.BASE_LOGIN
        return data
    }

    if (code === HttpEnum.TIMEOUT) {
        uesErrorMsg('接口请求超时,请刷新页面重试!')
        return 'error'
    }

    return Promise.reject(res.data)
}

export function ResponseFailure(e: any) {
    const { code, message } = e || {}
    const err: string = e?.toString?.() ?? ''
    try {
        if (code === HttpEnum.TIMEOUT && message.indexOf('timeout') !== -1) {
            uesErrorMsg('请求超时')
            throw new Error('请求超时')
        }
        if (err?.includes('Network Error')) {
            uesErrorMsg('网络异常')
        }
    } catch (error) {
        throw new Error(error)
    }
    return e
}

const filterNullParams = (params: any) => {
    Object.keys(params).filter(
        (key) =>
            (params[key] === '' || params[key] === undefined || params[key] === null) &&
            delete params[key]
    )

    return params
}
