import { ComponentState } from 'react'
import {
    Cascader,
    Checkbox,
    DatePicker,
    Input,
    InputNumber,
    Radio,
    Select,
    TimePicker,
    TreeSelect
} from 'antd'

interface ComponentType {}

const componentMap = new Map<ComponentType, ComponentState>()

componentMap.set('Input', Input)
componentMap.set('InputPassword', Input.Password)
componentMap.set('InputTextArea', Input.TextArea)
componentMap.set('InputSearch', Input.Search)
componentMap.set('InputNumber', InputNumber)

componentMap.set('Select', Select)
componentMap.set('Cascader', Cascader)
componentMap.set('TreeSelect', TreeSelect)
componentMap.set('CheckboxGroup', Checkbox.Group)
componentMap.set('Checkbox', Checkbox.Group)
componentMap.set('DatePicker', DatePicker)
componentMap.set('RangePicker', DatePicker.RangePicker)
componentMap.set('RadioGroup', Radio.Group)
componentMap.set('Radio', Radio.Group)
componentMap.set('TimePicker', TimePicker)

export default componentMap
