import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import Layouts from '../layouts/index'

import { RoutersProps } from './interface/index'
import Auth from './auth'
import LazyLoad from './LazyLoad'

// default layouts
export const LayoutIndex = () => <Layouts />
import Error403 from '/@/page/error/403/index'
import Error404 from '/@/page/error/404/index'
import Login from '/@/page/login/index'

const routers: RoutersProps[] = [
    {
        path: '/',
        element: <Navigate to="login" />
    },
    {
        path: '/error/403',
        element: <Error403 />
    },
    {
        path: '/error/404',
        element: <Error404 />
    },
    {
        path: 'login',
        element: <Login />
    }
]

function filterAsyncRouter(routes: RoutersProps[], routers: RoutersProps[]) {
    const viteModule = import.meta.glob('/src/page/**')
    routes.map((route: RoutersProps, index: number) => {
        let Module: JSX.Element | any = ''
        const { meta } = route

        if (route.element === 'Layout') {
            routers[index] = {
                element: <LayoutIndex />
            }
        } else {
            const URL = `/src/page/${route.element}.tsx`
            Module = LazyLoad(lazy(viteModule[URL]))
            const ele = meta?.auth ? <Auth>{Module}</Auth> : Module
            routers[index] = {
                path: route.path,
                element: route.element ? ele : null
            }
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
    const tempRoutes: RoutersProps[] = []
    filterAsyncRouter(routes, tempRoutes)
    routers.push(...tempRoutes)
    routers.push({
        path: '*',
        element: <Navigate to="/error/404" />
    })
}

const Router = () => {
    const routes = useRoutes(routers)
    return routes
}

export { Router, useLazy }
