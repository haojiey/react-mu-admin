import React from 'react'

import './index.less'

import Charts from '/@/components/Charts'

const Index: React.FC = () => {
    const option = {
        legend: {
            top: 'top',
            textStyle: {
                color: '@text-color-secondary'
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [10, 100],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' }
                ]
            }
        ]
    }
    return (
        <div className="charts charts-pie">
            <Charts options={option} />
        </div>
    )
}

export default Index
