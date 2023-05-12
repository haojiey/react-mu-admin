import { useEffect, useState } from 'react'
import screenfull from 'screenfull'

const FullScreenIcon = () => {
    const [fullScreen, setFullScreen] = useState<boolean>(screenfull.isFullscreen)

    useEffect(() => {
        screenfull.on('change', () => {
            if (screenfull.isFullscreen) {
                setFullScreen(true)
            } else {
                setFullScreen(false)
            }
            return () => screenfull.off('change', () => {})
        })
    }, [])

    const handleFullScreen = () => {
        screenfull.toggle()
    }
    return (
        <div className="mx-[8px] flex cursor-pointer" onClick={handleFullScreen} title="缩放">
            <i
                className={[
                    'iconfont !text-[19px] font-black',
                    fullScreen ? 'icon-a-FullscreenExit' : 'icon-Fullscreen'
                ].join(' ')}
            />
        </div>
    )
}
export default FullScreenIcon
