import * as types from '/@/redux/constant'

// * setTheme
export const setTheme = (isDark: boolean) => ({
    type: types.SET_THEME,
    isDark
})
