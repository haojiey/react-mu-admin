import React from 'react'
import { BellOutlined } from '@ant-design/icons'
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
                <BellOutlined className="text-[20px]" />
            </Badge>
        </div>
    </Popover>
)

export default NotifyIcon
