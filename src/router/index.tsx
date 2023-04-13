import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import Layouts from '../layouts/index'

import { RoutersProps } from './interface/index'
import Auth from './auth'
import LazyLoad from './LazyLoad'

// default layouts
export const LayoutIndex = () => <Layouts />

import Login from '/@/page/login/index'

const routers = [
    {
        path: '/',
        element: <LayoutIndex />,
        children: []
    },
    {
        path: '/login',
        element: <Login />
    }
]

function filterAsyncRouter(routes: RoutersProps[], routers: RoutersProps[]) {
    routes.map((route: RoutersProps, index: number) => {
        const URL = `/@/page/${route.element}.tsx`
        // 懒加载动态路由
        // 都设置为 ‘/’ 的子路由，只需要引入一个LayoutIndex
        let Module: JSX.Element | any = LazyLoad(lazy(() => import(URL)))
        const { meta } = route
        const ele = meta?.auth ? <Auth>{Module}</Auth> : Module

        routers[index] = {
            path: route.path,
            element: route.element ? ele : null
        }
        if (route.children && route.children.length) {
            routers[index].children = filterAsyncRouter(
                route.children,
                routers[index].children || []
            )
        }
    })
    return routers
}

function useLazy(routes: RoutersProps[]) {
    filterAsyncRouter(routes, routers[0].children)
}

const Router = () => {
    const routes = useRoutes(routers)
    return routes
}

export { Router, useLazy }
