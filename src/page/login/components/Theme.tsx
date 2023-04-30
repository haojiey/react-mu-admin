import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import { Switch } from 'antd'

import { setTheme } from '/@/redux/modules/theme/action'
const Sun = () => <i className="iconfont icon-sun"></i>

const Moon = () => <i className="iconfont icon-moon"></i>

const Index: React.FC = ({ isDark, setTheme }: any) => {
    function changeTheme(checked: boolean) {
        const theme = checked ? 'theme-dark' : 'theme-default'
        toggleTheme({
            scopeName: theme
        })
        setTheme(checked)
    }
    useEffect(() => {
        const theme = isDark ? 'theme-dark' : 'theme-default'
        toggleTheme({
            scopeName: theme
        })
    }, [])
    return (
        <Switch
            className="login-theme"
            onChange={changeTheme}
            checkedChildren={<Sun />}
            unCheckedChildren={<Moon />}
            defaultChecked={isDark}
        />
    )
}

export default connect((state: any) => state.theme, {
    setTheme
})(Index)
