/**
 * 千位分割
 * @param num
 * @returns
 */
export function formatMoney(num: number) {
    let reg = /\d{1,3}(?=(\d{3})+$)/g
    return (num + '').replace(reg, '$&,')
}
