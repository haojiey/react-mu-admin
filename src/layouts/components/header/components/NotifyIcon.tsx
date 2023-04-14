import React from 'react'
import { Badge, Popover } from 'antd'

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
)

const NotifyIcon: React.FC = () => (
    <Popover placement="bottom" content={content} title="Title">
        <div className="mx-[8px] flex cursor-pointer">
            <Badge size="small" count={5}>
                <i className="iconfont icon-Bell font-black text-[20px]" />
            </Badge>
        </div>
    </Popover>
)

export default NotifyIcon
