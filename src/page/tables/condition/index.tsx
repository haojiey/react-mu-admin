import Tables from '/@/components/Tables'
interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
}
import type { ColumnsType } from 'antd/es/table'

export default function Index() {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address'
        }
    ]

    const data: DataType[] = []
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`
        })
    }

    return (
        <div className="card">
            <Tables columns={columns} dataSource={data} />
        </div>
    )
}
