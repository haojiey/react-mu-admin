import produce from 'immer'
import { AnyAction } from 'redux'

import * as types from '/@/redux/constant'
import { UserInfoState } from '/@/redux/interface'

const userState: UserInfoState = {
    name: '',
    auth: '',
    token: ''
}

// user reducer
const user = (state: UserInfoState = userState, action: AnyAction) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case types.SET_TOKEN:
                draftState.token = action.token
                break
            case types.SET_NAME:
                draftState.name = action.name
                break
            default:
                return draftState
        }
    })

export default user
