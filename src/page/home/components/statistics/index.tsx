import React from 'react'
import { Col, Row } from 'antd'

import './index.less'

import download from '/@/assets/svg/download.svg'
import information from '/@/assets/svg/information.svg'
import invoice from '/@/assets/svg/invoice.svg'
import vip from '/@/assets/svg/vip.svg'
import { formatMoney } from '/@/utils'

const Statistics: React.FC = () => (
    <Row gutter={38} className="statisitcs">
        <Col span={6}>
            <div className="statisitcs-box">
                <div className="statisitcs-box-img">
                    <img src={vip} alt="" />
                </div>
                <div className="statisitcs-box-inner">
                    <p>Vip</p>
                    <p className="number">{formatMoney(32980)}</p>
                </div>
            </div>
        </Col>
        <Col span={6}>
            <div className="statisitcs-box">
                <div className="statisitcs-box-img">
                    <img src={download} alt="" />
                </div>
                <div className="statisitcs-box-inner">
                    <p>Download</p>
                    <p className="number">{formatMoney(169281)}</p>
                </div>
            </div>
        </Col>
        <Col span={6}>
            <div className="statisitcs-box">
                <div className="statisitcs-box-img">
                    <img src={information} alt="" />
                </div>
                <div className="statisitcs-box-inner">
                    <p>Information</p>
                    <p className="number">{formatMoney(3956)}</p>
                </div>
            </div>
        </Col>
        <Col span={6}>
            <div className="statisitcs-box">
                <div className="statisitcs-box-img">
                    <img src={invoice} alt="" />
                </div>
                <div className="statisitcs-box-inner">
                    <p>Invoice</p>
                    <p className="number">{formatMoney(871293)}</p>
                </div>
            </div>
        </Col>
    </Row>
)

export default Statistics
