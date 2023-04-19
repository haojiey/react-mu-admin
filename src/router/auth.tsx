import { Navigate } from 'react-router-dom'

import { store } from '/@/redux/index'

const Auth = (props: { children: JSX.Element }) => {
    const token = store.getState().user.token
    if (!token) {
        return <Navigate to="/login" />
    }

    return props.children
}

export default Auth
