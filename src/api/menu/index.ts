import { defaultRequest } from '/@/utils/http/index'

export function getMenuList() {
    return defaultRequest.request({
        url: '/menu/list',
        method: 'get'
    })
}
