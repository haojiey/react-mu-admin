import React from 'react'
import { Card, Descriptions } from 'antd'

import './index.less'

const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center'
}

const Index: React.FC = () => (
    <div className="card">
        <Card title="Icon 示例">
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-Bell !text-[24px]" />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-Clothes !text-[24px]" />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-a-FullscreenExit !text-[24px]" />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-Fullscreen !text-[24px]" />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-comments !text-[24px]" />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-cry !text-[24px]" />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-delete !text-[24px]" />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <i className="iconfont icon-edit !text-[24px]" />
            </Card.Grid>
        </Card>

        <Descriptions title="使用方法🚀" bordered className="mt-10">
            <Descriptions.Item label="标签">i</Descriptions.Item>
            <Descriptions.Item label="默认类名">iconfont</Descriptions.Item>
            <Descriptions.Item label="图标类名">icon-xxx</Descriptions.Item>
        </Descriptions>
    </div>
)

export default Index
