import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import LayoutHeader from './components/header'
import LayoutSider from './components/sider'

import './index.less'
const { Content, Sider } = Layout
const Layouts: React.FC = (props: any) => {
    const { isCollapse } = props
    const [collapsed, setCollapsed] = useState(false)

    useEffect(() => {
        setCollapsed(isCollapse)
    }, [isCollapse])

    return (
        <Layout>
            <LayoutHeader />
            <section className="flex ant-section">
                <Layout>
                    <Sider collapsed={collapsed}>
                        <LayoutSider />
                    </Sider>
                    <Content>
                        <Outlet />
                        {/* <LayoutFooter /> */}
                    </Content>
                </Layout>
            </section>
        </Layout>
    )
}

export default connect((state: any) => state.menu)(Layouts)
