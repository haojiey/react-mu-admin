export namespace Menu {
    export interface MenuOptions {
        path: string
        title: string
        icon?: string
        isLink?: string
        close?: boolean
        children?: MenuOptions[]
    }
}

export interface MenuProps {
    type: string
    menuList: Menu.MenuOptions[]
}

export namespace LoginApiForm {
    export interface ReqForm {
        username: string
        password: string
    }
    export interface ResLogin {
        token: string
    }
}
