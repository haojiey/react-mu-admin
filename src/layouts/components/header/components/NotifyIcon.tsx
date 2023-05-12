import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'antd'

import { MenuEnum } from '/@/enum/menu'

const NotifyIcon: React.FC = () => {
    const navigate = useNavigate()
    const jump = () => {
        navigate(MenuEnum.SYSTEM_NOTIFY)
    }
    return (
        <div className="mx-[8px] flex cursor-pointer" onClick={jump} title="消息通知">
            <Badge size="small" count={5}>
                <i className="iconfont icon-Bell font-black text-[20px]" />
            </Badge>
        </div>
    )
}

export default NotifyIcon
