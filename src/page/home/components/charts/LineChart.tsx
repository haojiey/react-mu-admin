import React from 'react'

import './index.less'

import Charts from '/@/components/Charts'

const Index: React.FC = () => {
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Vip', 'Download', 'Information', 'Invoice'],
            textStyle: {
                color: 'red'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Vip',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Download',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Information',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Invoice',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    }

    return (
        <div className="charts">
            <Charts options={option} />
        </div>
    )
}

export default Index
