import { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'

import { setTheme } from '/@/redux/modules/theme/action'

const ThemeIcon = ({ isDark, setTheme }: any) => {
    function changeTheme() {
        const theme = isDark ? 'theme-default' : 'theme-dark'
        toggleTheme({
            scopeName: theme
        })
        setTheme(!isDark)
    }
    useEffect(() => {
        const theme = isDark ? 'theme-dark' : 'theme-default'
        toggleTheme({
            scopeName: theme
        })
    }, [])

    return (
        <div className="mx-[8px] flex cursor-pointer" onClick={changeTheme} title="换肤">
            <i className="iconfont icon-Clothes font-black text-[20px]" />
        </div>
    )
}
export default connect((state: any) => state.theme, {
    setTheme
})(ThemeIcon)
