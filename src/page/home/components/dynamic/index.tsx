import React, { useEffect, useState } from 'react'
import { Avatar, Button, List, Skeleton } from 'antd'

import './index.less'

interface DataType {
    gender?: string
    name: {
        title?: string
        first?: string
        last?: string
    }
    email?: string
    picture: {
        large?: string
        medium?: string
        thumbnail?: string
    }
    nat?: string
    loading: boolean
}

const count = 8
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`

const Index: React.FC = () => {
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<DataType[]>([])
    const [list, setList] = useState<DataType[]>([])

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false)
                setData(res.results)
                setList(res.results)
            })
    }, [])

    const onLoadMore = () => {
        setLoading(true)
        setList(
            data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })))
        )
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results)
                setData(newData)
                setList(newData)
                setLoading(false)
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'))
            })
    }

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px'
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null

    return (
        <div className="dynamic">
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item actions={[<a key="list-loadmore-view">查看详情</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<span>{item.name?.last}</span>}
                                description="一分钟前更新动态"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Index
