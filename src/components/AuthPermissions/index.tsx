import React from 'react'
import { connect } from 'react-redux'

type propsState = {
    authority?: string
    permissions?: string[]
    children: React.ReactNode[] | string | React.ReactElement
}

const AuthPermissions = (props: propsState) => {
    const { permissions = [], authority = '', children } = props
    const auth = authority ? permissions.includes(authority) : authority
    return <>{(auth || authority == '') && children}</>
}
export default connect((state: any) => state.user)(AuthPermissions)
