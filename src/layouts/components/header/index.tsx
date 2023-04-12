import { Layout } from 'antd'

import Bread from '../bread'

import AvatarIcon from './components/AvatarIcon'
import CollapseIcon from './components/CollapseIcon'
import FullScreenIcon from './components/FullScreenIcon'
import NotifyIcon from './components/NotifyIcon'
import ThemeIcon from './components/ThemeIcon'
import UserName from './components/UserName'

import './index.less'

// import logo from '/@/assets/images/logo.png';
import logo from '/@/assets/svg/logo.svg'

const LayoutHeader = () => {
    const { Header } = Layout

    return (
        <Header>
            <div className="header-lf flex items-center">
                <div className="logo flex items-center">
                    <img src={logo} alt="logo" className="logo-img" />
                    <h2 className="logo-text">Mu Admin</h2>
                </div>
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
