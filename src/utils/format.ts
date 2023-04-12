import { ftDataState, TreeDataState } from './type'

/**
 * @description 格式化树形数据结构为扁平数据结构
 * @param data 传入初始数据
 * @param treeData return 的返回结果
 * @param _params 替换初始数据中 key,title,children 字段为树组件中对应的字段
 * @param _level 层级级别
 * @param parentIds 父节点id集合用来设置pid
 * @param _params.other 自定义添加需要返回的字段
 */
export function formatFlatTree(
    data: Array<any>,
    _params: any = {},
    _level = 1,
    parentIds: string[] = [],
    treeData: TreeDataState[] = []
): TreeDataState[] {
    if (!data.length) {
        return treeData
    }
    const list: TreeDataState[] = []
    const param = {
        id: _params.id || 'key',
        title: _params.title || 'title',
        children: _params.children || 'children',
        other: _params.other || []
    }
    const pIds: string[] = []
    const obj: any = {}
    for (let i = 0; i < data.length; i++) {
        const node = data[i]
        const key = node[param.id]
        const child = node[param.children] || []
        if (param.other.length) {
            param.other.forEach((element: string) => {
                obj[element] = node[element]
            })
        }
        treeData.push({
            key: key,
            title: node[param.title],
            pid: parentIds[i] || '0',
            level: _level,
            ...obj
        })
        list.push(...child)
        pIds.push(...new Array(child.length).fill(key))
    }
    return formatFlatTree(list, param, _level + 1, pIds, treeData)
}

/** 格式化扁平数据结构为树形数据结构*/
export function formatTree(list: TreeDataState) {
    const data = JSON.parse(JSON.stringify(list))
    const obj: any = {},
        trees: ftDataState[] = []
    data.forEach((item: TreeDataState) => {
        item.children = []
        obj[item.key] = item
    })
    data.forEach((item: TreeDataState) => {
        const parent = obj[item.pid]
        if (parent) {
            ;(parent.children || (parent.children = [])).push(item)
        } else {
            trees.push(item)
        }
    })
    return trees
}
