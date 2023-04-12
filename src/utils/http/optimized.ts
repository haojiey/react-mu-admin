import { RequestConfig } from './types'

import { httpEnum } from '/@/enum/http'
import { useMessage } from '/@/hooks/message'
import { isString } from '/@/utils/is'

const { uesErrorMsg } = useMessage()

export function OptimizedData(config: RequestConfig) {
    let { data, method, baseURL, url } = config
    // config.url = baseURL + url

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
        const params = filterNullParams(data)
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

export function ResponseSuccess(res: any) {
    const { code, data } = res.data

    if (code === httpEnum.SUCCESS) {
        return data
    }

    if (code === httpEnum.NO_AUTHORITY) {
        // TODO:登出
        // return data
    }

    if (code === httpEnum.TIMEOUT) {
        uesErrorMsg('接口请求超时,请刷新页面重试!')
        return 'error'
    }
}

export function ResponseFailure(e: any) {
    const { code, message } = e || {}
    const err: string = e?.toString?.() ?? ''
    try {
        if (code === httpEnum.TIMEOUT && message.indexOf('timeout') !== -1) {
            uesErrorMsg('请求超时')
            throw new Error('请求超时')
        }
        if (err?.includes('Network Error')) {
            uesErrorMsg('网络异常')
            return
        }
    } catch (error) {
        throw new Error(error)
    }
}

const filterNullParams = (params: any) => {
    Object.keys(params).filter(
        (key) =>
            (params[key] === '' || params[key] === undefined || params[key] === null) &&
            delete params[key]
    )

    return params
}
