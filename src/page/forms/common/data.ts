export const normalConfig = [
    {
        label: '输入框',
        name: 'input',
        components: 'Input'
    },
    {
        label: '级联框',
        name: 'cas',
        components: 'Cascader',
        options: [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                disabled: true,
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: '下拉框',
        name: 'Select',
        components: 'Select',
        options: [
            {
                value: 'jack',
                label: 'Jack'
            },
            {
                value: 'lucy',
                label: 'Lucy'
            },
            {
                value: 'disabled',
                disabled: true,
                label: 'Disabled'
            },
            {
                value: 'Yiminghe',
                label: 'yiminghe'
            }
        ]
    },
    {
        label: '多选框',
        name: 'check',
        components: 'CheckboxGroup',
        options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Orange', value: 'Orange' }
        ]
    },
    {
        label: '时间框',
        name: 'time',
        components: 'TimePicker'
    },
    {
        label: '时间范围框',
        name: 'range',
        components: 'RangePicker',
        placeholder: ['开始日期', '结束日期']
    },
    {
        label: '单选框',
        name: 'Radio',
        components: 'RadioGroup',
        options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Orange', value: 'Orange' }
        ]
    }
]

export const checklConfig = [
    {
        label: '输入框',
        name: 'input',
        components: 'Input',
        required: true
    },
    {
        label: '级联框',
        name: 'cas',
        components: 'Cascader',
        required: true,
        options: [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake'
                            }
                        ]
                    }
                ]
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                disabled: true,
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: '下拉框',
        name: 'Select',
        components: 'Select',
        required: true,
        options: [
            {
                value: 'jack',
                label: 'Jack'
            },
            {
                value: 'lucy',
                label: 'Lucy'
            },
            {
                value: 'disabled',
                disabled: true,
                label: 'Disabled'
            },
            {
                value: 'Yiminghe',
                label: 'yiminghe'
            }
        ]
    },
    {
        label: '多选框',
        name: 'check',
        components: 'CheckboxGroup',
        required: true,
        options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Orange', value: 'Orange' }
        ]
    },
    {
        label: '时间框',
        name: 'time',
        required: true,
        components: 'TimePicker'
    },
    {
        label: '时间范围框',
        name: 'range',
        required: true,
        components: 'RangePicker',
        placeholder: ['开始日期', '结束日期']
    },
    {
        label: '单选框',
        name: 'Radio',
        components: 'RadioGroup',
        required: true,
        options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Orange', value: 'Orange' }
        ]
    }
]

export const querylConfig = [
    {
        label: '输入框1',
        name: 'input1',
        components: 'Input'
    },
    {
        label: '输入框2',
        name: 'input2',
        components: 'Input'
    },
    {
        label: '输入框3',
        name: 'input3',
        components: 'Input'
    },
    {
        label: '输入框4',
        name: 'input4',
        components: 'Input'
    },
    {
        label: '输入框5',
        name: 'input5',
        components: 'Input'
    },
    {
        label: '输入框6',
        name: 'input6',
        components: 'Input'
    },
    {
        label: '输入框7',
        name: 'input7',
        components: 'Input'
    },
    {
        label: '输入框8',
        name: 'input8',
        components: 'Input'
    },
    {
        label: '输入框9',
        name: 'input9',
        components: 'Input'
    },
    {
        label: '输入框10',
        name: 'input10',
        components: 'Input'
    }
]
