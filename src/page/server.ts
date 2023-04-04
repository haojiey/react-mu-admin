import { defaultRequest } from '/@/utils/http/index'

export function getList() {
  return defaultRequest.request({
    url: '/api/todos/1',
    method: 'get',
    data: { b: null }
  })
}
