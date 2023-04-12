import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import './App.css'

import '/@/design/index.less'

import { store } from '/@/redux/index'
import { getMenuListAction } from '/@/redux/modules/menu/action'
import { Router, useLazy } from '/@/router/index'

const App = (props: any) => {
  const { getMenuListAction } = props
  const [_, setRoutes] = useState([])

  useEffect(() => {
    getMenu()
  }, [])

  const getMenu = async () => {
    await getMenuListAction()
    const routers = store.getState().menu.menuList
    useLazy(routers)
    setRoutes([])
  }

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  )
}
export default connect(null, { getMenuListAction })(App)
