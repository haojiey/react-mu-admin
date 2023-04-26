import { useState } from 'react'
import { ConfigProvider, Table } from 'antd'

import Header from './components/Header'
import { TablesProps } from './types'

import './index.less'

import Empty from '/@/components/Empty'
const Tables = (props: TablesProps) => {
    const { columns, dataSource } = props
    const propsState = {
        size: 'middle',
        ...props
    }
    const [colu, setColu] = useState(columns || [])

    const setHideColumns = (values: any) => {
        colu.forEach((item: any) => {
            if (!values.includes(item.dataIndex)) {
                item['className'] = 'hidden'
            } else {
                item['className'] = ''
            }
        })
        setColu([...colu])
    }
    return (
        <div className="mu-custom-tables">
            <Header
                setColumns={setHideColumns}
                columns={colu}
                headerContent={props.headerContent || null}
            />
            <ConfigProvider renderEmpty={Empty as any}>
                <Table {...propsState} dataSource={dataSource} columns={colu} />
            </ConfigProvider>
        </div>
    )
}

export default Tables
