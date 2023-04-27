import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import { Switch } from 'antd'

import { setTheme } from '/@/redux/modules/theme/action'
const Sun = () => <i className="iconfont icon-sun"></i>

const Moon = () => <i className="iconfont icon-moon"></i>

const Index: React.FC = ({ def, setTheme }: any) => {
    function changeTheme() {
        const theme = def == 'theme-default' ? 'theme-dark' : 'theme-default'
        toggleTheme({
            scopeName: theme
        })
        setTheme(theme)
    }
    useEffect(() => {
        toggleTheme({
            scopeName: def
        })
    }, [])
    return (
        <Switch
            className="login-theme"
            onChange={changeTheme}
            checkedChildren={<Sun />}
            unCheckedChildren={<Moon />}
            checked={def == 'theme-dark'}
        />
    )
}

export default connect((state: any) => state.theme, {
    setTheme
})(Index)
