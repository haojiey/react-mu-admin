import React from 'react'
import { Col, Row } from 'antd'

import LineChart from './components/charts/LineChart'
import PieChart from './components/charts/PieChart'
import RadarChart from './components/charts/RadarChart'
import Dynamic from './components/dynamic'
import Statistic from './components/statistics'

import './index.less'

const Index: React.FC = () => (
    <div className="home">
        <Statistic />
        <LineChart />
        <Row gutter={24}>
            <Col span={8}>
                <Dynamic />
            </Col>
            <Col span={8}>
                <RadarChart />
            </Col>
            <Col span={8}>
                <PieChart />
            </Col>
        </Row>
    </div>
)

export default Index
