import { SkinOutlined } from '@ant-design/icons'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'

const ThemeIcon = () => {
  function changeTheme() {
    toggleTheme({
      scopeName: 'theme-dark'
    })
  }

  return (
    <div className="mx-[8px] flex cursor-pointer">
      <SkinOutlined className="text-[19px]" onClick={changeTheme} />
    </div>
  )
}
export default ThemeIcon
