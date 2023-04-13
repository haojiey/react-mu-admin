import { Layout } from 'antd'

import Bread from '../bread'

import AvatarIcon from './components/AvatarIcon'
import CollapseIcon from './components/CollapseIcon'
import FullScreenIcon from './components/FullScreenIcon'
import Logo from './components/Logo'
import NotifyIcon from './components/NotifyIcon'
import ThemeIcon from './components/ThemeIcon'
import UserName from './components/UserName'

import './index.less'

const LayoutHeader = () => {
    const { Header } = Layout

    return (
        <Header>
            <div className="header-lf flex items-center">
                <Logo />
                <CollapseIcon />
                <Bread />
            </div>
            <div className="header-ri flex items-center">
                <NotifyIcon />
                <ThemeIcon />
                <FullScreenIcon />
                <UserName />
                <AvatarIcon />
            </div>
        </Header>
    )
}

export default LayoutHeader
