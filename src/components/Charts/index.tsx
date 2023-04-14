import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

import Empty from '../Empty'
const Charts = ({ options, empty = false }: { options: any; empty?: boolean }) => {
    const echartsRef = useRef<HTMLDivElement>(null)
    const myChart = useRef<echarts.EChartsType>()

    const echartsResize = () => {
        echartsRef && myChart?.current?.resize()
    }

    useEffect(() => {
        if (echartsRef?.current) {
            myChart.current = echarts.init(echartsRef.current as HTMLDivElement)
        }
        options && myChart?.current?.setOption(options)
        window.addEventListener('resize', echartsResize, false)
        return () => {
            window.removeEventListener('resize', echartsResize)
            myChart?.current?.dispose()
        }
    }, [options])

    return <>{empty ? <Empty /> : <div ref={echartsRef} className="w-full h-full"></div>}</>
}

export default Charts
