// index.ts
import Request from './request'
import { CreateOptions } from './types'

function createAxios(options: CreateOptions) {
    return new Request({
        baseURL: '/',
        timeout: 10 * 1000,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        ...options
    })
}
export const defaultRequest = createAxios({
    baseURL: 'api/'
})
