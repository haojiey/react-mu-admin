import { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'

import { MenuBtnColumns, MenuColumns } from '../common/data'

import BtnAuthModal from './components/BtnAuthModal'
import MenuModal from './components/MenuModal'

import './index.less'

import { getMenuBtnAuthList, getMenuList } from '/@/api/menu'
import Tables from '/@/components/Tables'
export default function Index() {
    const [btnAuthdata, setBtnAuthData] = useState([])
    const [menuData, setMenuData] = useState([])
    const [menuLoading, setMenuLoading] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)
    const [btnAuthTitle, setBtnAuthTitle] = useState('首页')
    const [menuModalTitle, setMenuModalTitle] = useState('')
    const [btnAuthModalTitle, setBtnAuthModalTitle] = useState('')

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isBtnAuthOpen, setIsBtnAuthOpen] = useState(false)

    useEffect(() => {
        getAuthBtn('home')
        getMenus()
    }, [])

    const showMenuModal = (flag: boolean, title: string) => {
        setIsMenuOpen(flag)
        setMenuModalTitle(title)
    }
    const showBtnAuthModal = (flag: boolean, title: string) => {
        setIsBtnAuthOpen(flag)
        setBtnAuthModalTitle(title)
    }

    const toggleMenuModal = (flag: boolean, values: any) => {
        setIsMenuOpen(flag)
        console.warn('表单内容', values)
    }
    const toggleBtnAuthModal = (flag: boolean, values: any) => {
        setIsBtnAuthOpen(flag)
        console.warn('表单内容', values)
    }

    async function getAuthBtn(path: string = '') {
        setAuthLoading(true)
        const result = await getMenuBtnAuthList({ path })
        setBtnAuthData(result)
        setAuthLoading(false)
    }

    async function getMenus() {
        setMenuLoading(true)
        const result = await getMenuList()
        const menu = result.map((item: any) => item.children[0])
        setMenuData(menu)
        setMenuLoading(false)
    }

    const onTableRow = (record: any) => ({
        onClick: () => {
            getAuthBtn(record.path)
            setBtnAuthTitle(record.meta.title || '')
        }
    })
    return (
        <div className="card">
            <MenuModal
                isModalOpen={isMenuOpen}
                setIsOpen={toggleMenuModal}
                title={menuModalTitle}
            />
            <BtnAuthModal
                isModalOpen={isBtnAuthOpen}
                setIsOpen={toggleBtnAuthModal}
                title={btnAuthModalTitle}
            />
            <Row gutter={24}>
                <Col span={14}>
                    <Tables
                        rowKey={(record) => record.meta.title}
                        columns={MenuColumns(showMenuModal)}
                        dataSource={menuData}
                        loading={menuLoading}
                        className="menu-tables"
                        onRow={onTableRow}
                        headerContent={{
                            content: () => [
                                <h1 className="text-[18px] font-bold" key={'menu'}>
                                    菜单配置
                                </h1>
                            ]
                        }}
                    />
                </Col>
                <Col span={10}>
                    <Tables
                        rowKey={'index'}
                        columns={MenuBtnColumns(showBtnAuthModal)}
                        dataSource={btnAuthdata}
                        loading={authLoading}
                        className="menu-tables"
                        headerContent={{
                            content: () => [
                                <h1 className="text-[18px] font-bold" key={'menu'}>
                                    {btnAuthTitle}按钮权限配置
                                </h1>,
                                <Button
                                    key="btn"
                                    type="primary"
                                    onClick={() => showBtnAuthModal(true, '新增权限配置')}
                                    icon={<PlusOutlined />}
                                >
                                    {' '}
                                    新增配置
                                </Button>
                            ]
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}
