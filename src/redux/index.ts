import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduxThunk from 'redux-thunk'

import menu from './modules/menu/reducer'
import theme from './modules/theme/reducer'
import user from './modules/user/reducer'
import { PERSIT_CONFIG_MU } from './constant'

// Reducer function resolution
const reducer = combineReducers({
    menu,
    user,
    theme
})

// persitConfig configuration information
const persitConfig = {
    key: PERSIT_CONFIG_MU,
    storage: storage
}

// create configuration persist information
const persist_reducers = persistReducer(persitConfig, reducer)

// Solve the problem that the same function supports multiple dispatches and asynchronous actions in React development
let store = createStore(persist_reducers, applyMiddleware(reduxThunk))

const persistor = persistStore(store)

const clearPersistor = () => {
    localStorage.removeItem(`persist:${PERSIT_CONFIG_MU}`)
}
export { clearPersistor, persistor, store }
