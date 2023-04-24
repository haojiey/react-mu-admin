import * as types from '/@/redux/constant'

// * setToken
export const setToken = (token: string) => ({
    type: types.SET_TOKEN,
    token
})

// * setName
export const setName = (name: string) => ({
    type: types.SET_NAME,
    name
})

// * setPermissions
export const setPermissions = (permissions: string[]) => ({
    type: types.SET_PERMISSIONS,
    permissions
})

// * clearInfo
export const clearInfo = () => ({
    type: types.CLEAR_INFO
})
