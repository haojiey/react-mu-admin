import React from 'react'

import './index.less'

import Charts from '/@/components/Charts'

const Index: React.FC = () => {
    const option = {
        legend: {
            data: ['Allocated Budget', 'Actual Spending'],
            textStyle: {
                color: '@text-color-secondary'
            }
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Allocated Budget'
                    },
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: 'Actual Spending'
                    }
                ]
            }
        ]
    }
    return (
        <div className="charts charts-radar">
            <Charts options={option} />
        </div>
    )
}

export default Index
