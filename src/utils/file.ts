/**
 * @descriptionimg url to base64
 */
export function urlToBase64(url: string, mineType?: string): Promise<string> {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('CANVAS') as Nullable<HTMLCanvasElement>
        const ctx = canvas!.getContext('2d')

        const img = new Image()
        img.crossOrigin = ''
        img.onload = function () {
            if (!canvas || !ctx) {
                return reject()
            }
            canvas.height = img.height
            canvas.width = img.width
            ctx.drawImage(img, 0, 0)
            const dataURL = canvas.toDataURL(mineType || 'image/png')
            canvas = null
            resolve(dataURL)
        }
        img.src = url
    })
}

/**
 * @description: base64 to blob
 */
function dataURLtoBlob(base64Buf: string): Blob {
    const arr = base64Buf.split(',')
    const typeItem = arr[0]
    const mime = typeItem.match(/:(.*?);/)![1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}

// 下载文件Buf
export function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart) {
    const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
    const blob = new Blob(blobData, { type: mime || 'application/octet-stream' })
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(blob, filename)
    } else {
        const blobURL = window.URL.createObjectURL(blob)
        const tempLink = document.createElement('a')
        tempLink.style.display = 'none'
        tempLink.href = blobURL
        tempLink.setAttribute('download', filename)
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank')
        }
        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
        window.URL.revokeObjectURL(blobURL)
    }
}

// 下载base64格式
export function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart) {
    const base64Buf = dataURLtoBlob(buf)
    downloadByData(base64Buf, filename, mime, bom)
}

// 下载在线图片
export function downloadByOnlineUrl(url: string, filename: string, mime?: string, bom?: BlobPart) {
    urlToBase64(url).then((base64) => {
        downloadByBase64(base64, filename, mime, bom)
    })
}
