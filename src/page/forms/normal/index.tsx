import { normalConfig } from '../common/data'

import Forms from '/@/components/Forms'

export default function Index() {
    const onSearch = (values: any) => {
        console.warn('Received values of form: ', values)
    }

    const formConfig = {
        submit: onSearch,
        isShowAdvanced: false,
        formsColumn: normalConfig
    }
    return (
        <div className="card">
            <Forms formConfig={formConfig} />
        </div>
    )
}
