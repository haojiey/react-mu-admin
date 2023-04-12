export interface TreeDataState {
    id?: string
    key: string
    title: string
    pid: number | string
    parent?: TreeDataState
    level: number
    isChild?: boolean
    isEdit?: boolean
    loading?: boolean
    children?: TreeDataState[]
    label?: string
    all_arr?: string[]
    pid_arr?: string[]
    scopedSlots?: object
}
export interface ftDataState {
    id: string
    key: string
    level: number
    title: string
    isEdit: false
    pid: number | string
    children: ftDataState[]
}
export interface TreeState {
    treeList: ftDataState[]
    expandKeys: string[]
    selectedKey: string[]
    treeFlatDat: any
    autoExpandParent: boolean
}
