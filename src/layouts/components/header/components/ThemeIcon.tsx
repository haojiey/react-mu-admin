import { connect } from 'react-redux'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'

import { setTheme } from '/@/redux/modules/theme/action'
const ThemeIcon = ({ def, setTheme }: any) => {
    function changeTheme() {
        const theme = def == 'theme-default' ? 'theme-dark' : 'theme-default'
        toggleTheme({
            scopeName: theme
        })
        setTheme(theme)
    }

    return (
        <div className="mx-[8px] flex cursor-pointer" onClick={changeTheme}>
            <i className="iconfont icon-Clothes font-black text-[20px]" />
        </div>
    )
}
export default connect((state: any) => state.theme, {
    setTheme
})(ThemeIcon)
