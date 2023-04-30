import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import '/@/assets/aliFont/iconfont.css'

import '/@/design/index.less'

import { store } from '/@/redux/index'
import { getMenuListAction } from '/@/redux/modules/menu/action'
import { Router, useLazy } from '/@/router/index'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const App = (props: any) => {
    const { getMenuListAction, user } = props
    const [, setRoutes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (location.hash != '#/login' && user.name) {
            getMenu()
        }
    }, [user.name])

    // 通过接口获取后台返回的路由
    const getMenu = async () => {
        setLoading(true)
        await getMenuListAction()
        const routers = store.getState().menu.menuList
        useLazy(routers)
        setRoutes([])
        setLoading(false)
    }

    return (
        <Spin spinning={loading} className="root-loading" indicator={antIcon} tip="Loading">
            <HashRouter>
                <Router />
            </HashRouter>
        </Spin>
    )
}
export default connect((state: any) => state, { getMenuListAction })(App)
