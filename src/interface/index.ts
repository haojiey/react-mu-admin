export interface meta {
    title?: string
    auth?: boolean
    keepAlive?: boolean
}

export namespace Menu {
    export interface MenuOptions {
        path: string
        title: string
        icon?: string
        element?: string
        isLink?: string
        close?: boolean
        meta?: meta
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
