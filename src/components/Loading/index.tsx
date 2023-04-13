import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import './index.less'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loading = ({ tip = 'Loading' }: { tip?: string }) => (
    <div id="loading">
        <Spin tip={tip} size="default" className="loading" indicator={antIcon}></Spin>
    </div>
)

export default Loading
