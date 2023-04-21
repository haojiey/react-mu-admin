import React, { useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Col, Form, Row } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import componentMap from '../ComponentMap'
import { AdvancedSearchBtnProps, AdvancedSearchFormProps, FormItemProps } from '../types'

const defFormsColumn = {
    labelAlign: 'right',
    colon: true,
    placeholder: '请填写内容',
    labelCol: {
        span: 6,
        offset: 0
    }
}

const AdvancedSearchForm: React.FC<AdvancedSearchFormProps> = ({
    formsColumn,
    expand,
    isShowAdvanced
}) => {
    function getFilds() {
        const children = []
        const fcLen = formsColumn.length
        const residualLen = 3 - (fcLen % 4)
        const rLen = residualLen == -1 ? 3 : residualLen

        for (let i = 0; i < fcLen; i++) {
            const {
                components,
                label,
                labelAlign,
                labelCol,
                name,
                required,
                colon,
                options,
                placeholder
            } = { ...defFormsColumn, ...formsColumn[i] } as any
            const Comp = componentMap.get(components)
            if (!Comp) {
                continue
            }
            const props = {
                placeholder,
                options
            }
            children.push(
                <Col
                    span={6}
                    key={i}
                    style={{
                        display: i > 6 && fcLen > 8 && isShowAdvanced && !expand ? 'none' : 'block'
                    }}
                >
                    <Form.Item
                        label={label}
                        labelAlign={labelAlign}
                        labelCol={labelCol}
                        name={name}
                        required={required}
                        colon={colon}
                        rules={[
                            {
                                required: required,
                                message: `请输入${label}`
                            }
                        ]}
                    >
                        <Comp {...props} />
                    </Form.Item>
                </Col>
            )
        }

        for (let i = 0; i < rLen; i++) {
            if (expand || fcLen < 9 || !isShowAdvanced) {
                children.push(<Col span={6} key={uuidv4()} />)
            } else {
                break
            }
        }
        return children
    }

    return <>{getFilds()}</>
}

const AdvancedSearchBtn: React.FC<AdvancedSearchBtnProps> = (props): JSX.Element => {
    const { expand, toggleAdvanced, fcLen, isShowAdvanced, form } = props
    const onReset = () => {
        form.resetFields()
    }

    return (
        <Col span={6}>
            <Form.Item className="flex flex-row-reverse items-center">
                <Button type="primary" htmlType="submit">
                    查询
                </Button>
                <Button className="ml-[12px]" onClick={onReset}>
                    重置
                </Button>
                {fcLen > 8 && isShowAdvanced && (
                    <Button type="primary" className="ml-[12px]" onClick={toggleAdvanced}>
                        <div className="flex items-center advanced-query">
                            {expand ? <UpOutlined /> : <DownOutlined />}
                            <span className="ml-[5px]">高级查询</span>
                        </div>
                    </Button>
                )}
            </Form.Item>
        </Col>
    )
}

const FormItem: React.FC<FormItemProps> = ({
    formsColumn,
    form,
    isShowAdvanced = true
}): JSX.Element => {
    const [expand, setExpand] = useState(false)

    const fcLen = formsColumn.length

    const toggleAdvanced = () => {
        setExpand(!expand)
    }

    return (
        <>
            <Row gutter={24}>
                <AdvancedSearchForm
                    expand={expand}
                    formsColumn={formsColumn}
                    isShowAdvanced={isShowAdvanced}
                    form={form}
                />
                <AdvancedSearchBtn
                    fcLen={fcLen}
                    expand={expand}
                    toggleAdvanced={toggleAdvanced}
                    isShowAdvanced={isShowAdvanced}
                    form={form}
                />
            </Row>
        </>
    )
}

export default FormItem
