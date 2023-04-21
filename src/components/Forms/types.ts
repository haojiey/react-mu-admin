type optionsState = {
    value: String | Number
    label: String
    children?: optionsState[]
}

// labelCol
type labelCol = {
    span?: Number
    offset?: Number
}

export type formsColumnProps = {
    label: String
    name: String
    components: String
    labelAlign?: String
    placeholder?: String | String[]
    required?: Boolean
    colon?: Boolean
    labelCol?: labelCol
    options?: optionsState[]
}

export type FormsProps = {
    submit: ((values: any) => void) | undefined
    isShowAdvanced?: Boolean
    formsColumn: formsColumnProps[]
}

export type AdvancedSearchBtnProps = {
    toggleAdvanced: ((values: any) => void) | undefined
    expand: boolean
    isShowAdvanced: Boolean
    fcLen: number
    formsColumn?: formsColumnProps[]
    form: any
}

export type FormItemProps = {
    form: any
    isShowAdvanced?: Boolean
    formsColumn: formsColumnProps[]
}

export type AdvancedSearchFormProps = {
    form: any
    expand: boolean
    isShowAdvanced?: Boolean
    formsColumn: formsColumnProps[]
}
