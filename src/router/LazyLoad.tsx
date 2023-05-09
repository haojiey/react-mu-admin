import React, { Suspense } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import { Spin } from 'antd'

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => (
    <Suspense
        fallback={
            <Spin
                indicator={antIcon}
                tip="Loading"
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%'
                }}
            />
        }
    >
        <Comp />
    </Suspense>
)

export default lazyLoad
