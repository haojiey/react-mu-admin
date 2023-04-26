import { defaultRequest } from '/@/utils/http/index'

export function getSystemUsers() {
    return defaultRequest.request({
        url: '/system/users',
        method: 'post'
    })
}

export function getSystemNotifys() {
    return defaultRequest.request({
        url: '/system/notifys',
        method: 'post'
    })
}
