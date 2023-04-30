import { Menu } from '/@/interface'

/* MenuState */
export interface MenuState {
    isCollapse: boolean
    menuList: Menu.MenuOptions[]
}

export interface UserInfoState {
    name: string
    auth: string
    token: string
    permissions: string[]
}

export interface ThemeState {
    isDark: boolean
}
