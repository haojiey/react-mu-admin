import { defaultRequest } from '/@/utils/http/index'

export function getMenuList() {
    return defaultRequest.request({
        url: '/menu/list',
        method: 'get'
    })
}

export function getMenuBtnAuthList(params) {
    return defaultRequest.request({
        url: '/menu/btnAuthList',
        method: 'post',
        data: params
    })
}
