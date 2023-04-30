import produce from 'immer'
import { AnyAction } from 'redux'

import * as types from '/@/redux/constant'
import { ThemeState } from '/@/redux/interface'

const themeState: ThemeState = {
    isDark: false
}

// theme reducer
const theme = (state: ThemeState = themeState, action: AnyAction) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case types.SET_THEME:
                draftState.isDark = action.isDark
                break
            default:
                return draftState
        }
    })

export default theme
