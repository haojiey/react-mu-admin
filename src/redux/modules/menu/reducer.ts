import produce from 'immer'
import { AnyAction } from 'redux'

import * as types from '/@/redux/constant'
import { MenuState } from '/@/redux/interface'
const menuState: MenuState = {
    isCollapse: false,
    menuList: []
}

// menu reducer
const menu = (state: MenuState = menuState, action: AnyAction) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case types.UPDATE_COLLAPSE:
                draftState.isCollapse = action.isCollapse
                break
            case types.SET_MENU_LIST:
                draftState.menuList = action.menuList
                break
            default:
                return draftState
        }
    })

export default menu
