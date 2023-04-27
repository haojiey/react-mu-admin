import produce from 'immer'
import { AnyAction } from 'redux'

import * as types from '/@/redux/constant'
import { ThemeState } from '/@/redux/interface'

const themeState: ThemeState = {
    def: 'theme-default'
}

// theme reducer
const theme = (state: ThemeState = themeState, action: AnyAction) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case types.SET_THEME:
                draftState.def = action.def
                break
            default:
                return draftState
        }
    })

export default theme
