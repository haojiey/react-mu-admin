import { defaultRequest } from '/@/utils/http/index'

export function getSystemUsers() {
    return defaultRequest.request({
        url: '/system/users',
        method: 'post'
    })
}
