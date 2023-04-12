import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import { RoutersProps } from './interface/index'
import { LayoutIndex } from './constant'
import lazyLoad from './utils'

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
    let Module = lazyLoad(lazy(() => import(URL)))
    routers[index] = {
      path: route.path,
      element: route.element ? Module : null
    }
    if (route.children && route.children.length) {
      routers[index].children = filterAsyncRouter(route.children, routers[index].children || [])
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
