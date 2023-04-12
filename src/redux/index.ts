import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import reduxThunk from 'redux-thunk'

import menu from './modules/menu/reducer'
const reducer = combineReducers({
  menu
})

let store = createStore(reducer, applyMiddleware(reduxThunk))

export { store }
