import React, { Suspense } from 'react'
import { Spin } from 'antd'

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => (
  <Suspense
    fallback={
      <Spin
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      />
    }
  >
    <Comp />
  </Suspense>
)

export default lazyLoad
