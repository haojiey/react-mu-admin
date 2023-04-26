import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

import './index.less'

import { Menu as MenuType } from '/@/interface'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type
    } as MenuItem
}

// 动态渲染 Icon 图标
const addIcon = (name: string) => <i className={`iconfont ${name} !text-[16px] font-black`} />

// 处理菜单的格式
const deepLoopFloat = (menuList: MenuType.MenuOptions[], newArr: MenuItem[] = [], path = '') => {
    menuList.forEach((item: MenuType.MenuOptions) => {
        if (!item?.children?.length) {
            return newArr.push(
                getItem(item?.meta?.title, `${path}/${item.path}`, addIcon(item.icon!))
            )
        }
        newArr.push(
            getItem(
                item?.meta?.title,
                `${path}/${item.path}`,
                addIcon(item.icon!),
                deepLoopFloat(item.children, [], `${path}/${item.path}`)
            )
        )
    })
    return newArr
}

const Sider: React.FC = (props: any) => {
    const { menuList: menus } = props
    const [openKeys, setOpenKeys] = useState([])
    const { pathname } = useLocation()
    const [defSelectKeys] = useState([pathname])
    const [menuList, setMenuList] = useState<MenuItem[]>([])

    // getMenuList
    const getMenuData = async () => {
        const tempMenus: MenuType.MenuOptions[] = []
        menus.map((item: MenuType.MenuOptions) => {
            if (item.element === 'Layout' && item.children) {
                tempMenus.push(...item.children)
            }
        })
        if (tempMenus.length) {
            setMenuList(deepLoopFloat(tempMenus))
        }
    }

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
        setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }

    // 点击当前菜单跳转页面
    const navigate = useNavigate()
    const clickMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
        navigate(key)
    }

    useEffect(() => {
        getMenuData()
    }, [menus])

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={defSelectKeys}
            openKeys={openKeys}
            onClick={clickMenu}
            onOpenChange={onOpenChange}
            items={menuList}
        />
    )
}

const mapStateToProps = (state: any) => state.menu
export default connect(mapStateToProps)(Sider)
