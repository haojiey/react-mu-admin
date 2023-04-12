import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown, message, Modal } from 'antd'

import avatar from '/@/assets/images/avatar.png'

const AvatarIcon = (props: any) => {
    const { setToken } = props
    const navigate = useNavigate()

    // 退出登录
    const logout = () => {
        Modal.confirm({
            title: '温馨提示 🧡',
            icon: <ExclamationCircleOutlined />,
            content: '是否确认退出登录？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                setToken('')
                message.success('退出登录成功！')
                navigate('/login')
            }
        })
    }
    const onClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
        if (key == '2') {
            logout()
        }
    }

    // Dropdown Menu
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: '个人信息'
        },
        {
            type: 'divider'
        },
        {
            key: '2',
            label: '退出系统'
        }
    ]
    return (
        <>
            <Dropdown
                className="cursor-pointer"
                menu={{ items, onClick }}
                placement="bottom"
                arrow
                trigger={['click']}
            >
                <Avatar size="large" src={avatar} />
            </Dropdown>
        </>
    )
}

const mapDispatchToProps = {}
export default connect(null, mapDispatchToProps)(AvatarIcon)
