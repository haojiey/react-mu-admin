import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'

const ThemeIcon = () => {
    function changeTheme() {
        toggleTheme({
            scopeName: 'theme-dark'
        })
    }

    return (
        <div className="mx-[8px] flex cursor-pointer" onClick={changeTheme}>
            <i className="iconfont icon-Clothes font-black text-[20px]" />
        </div>
    )
}
export default ThemeIcon
