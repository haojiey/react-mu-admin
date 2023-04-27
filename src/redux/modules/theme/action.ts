import * as types from '/@/redux/constant'

// * setTheme
export const setTheme = (def: string) => ({
    type: types.SET_THEME,
    def
})
