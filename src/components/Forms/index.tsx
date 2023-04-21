import React from 'react'
import { Form } from 'antd'

import FromItem from './components/FormItem'
import { FormsProps } from './types'

import './index.less'

const Forms: React.FC<{ formConfig: FormsProps }> = ({ formConfig }): JSX.Element => {
    const { formsColumn = [], isShowAdvanced, submit } = formConfig
    const [form] = Form.useForm()

    return (
        <>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form custom-form"
                onFinish={submit}
            >
                <FromItem formsColumn={formsColumn} isShowAdvanced={isShowAdvanced} form={form} />
            </Form>
        </>
    )
}

export default Forms
