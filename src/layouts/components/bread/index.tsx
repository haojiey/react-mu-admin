import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

import './index.less'

import { formatFlatTree } from '/@/utils/format'

interface BreadItem {
    path: string
    title: string
}

const Bread: React.FC = (props: any) => {
    const { pathname } = useLocation()
    const { menuList } = props
    const [breads, setBreads] = useState<BreadItem[]>([])
    const list = menuList.map((item) => item.children[0])

    const menus = formatFlatTree(list, {
        children: 'children',
        title: 'meta',
        id: 'path'
    })

    useEffect(() => {
        getBreadList(pathname)
    }, [pathname])

    const getBreadList = (path: string) => {
        const paths = path.split('/')
        let pt: string | null | number = paths[paths.length - 1]
        const breadList: BreadItem[] = []

        while (pt) {
            let menu = menus.find((item) => item.key == pt)
            if (menu) {
                breadList.unshift({
                    title: menu.title.title,
                    path: menu.key
                })
                pt = menu.pid
            } else {
                pt = null
            }
        }
        setBreads(breadList)
    }

    return (
        <>
            <Breadcrumb>
                {breads.map((item, index) => (
                    <Breadcrumb.Item key={index}>{item.title}</Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </>
    )
}

export default connect((state: any) => state.menu)(Bread)
