import { TableProps } from 'antd'

interface headerContentState {
    isShowFilter?: boolean
    content?: any
    settingDisable?: string[]
}

export interface HeaderProps {
    headerContent?: headerContentState | null
    columns: any
}

export type TablesProps = TableProps<any> & HeaderProps
