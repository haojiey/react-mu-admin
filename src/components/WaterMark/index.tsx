import React, { memo, useMemo } from 'react'
import { renderToString } from 'react-dom/server'

import './index.less'
const Index = (
    props: React.PropsWithChildren<{
        text: string
        fillColor?: string
        fillOpacity?: number
        fontSize?: number
    }>
) => {
    const svgUrl = useMemo(() => {
        const svgRes = (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="300px"
                height="180px"
                viewBox="0 0 300 180"
            >
                <text
                    x="-160"
                    y="-30"
                    fill={props.fillColor || '@text-color-secondary'}
                    transform="rotate(-35 220 -220)"
                    fillOpacity={props.fillOpacity || '0.1'}
                    fontSize={`${props.fontSize || '28'}px`}
                >
                    {' '}
                    {props.text}
                </text>
            </svg>
        )
        return URL.createObjectURL(
            new Blob([renderToString(svgRes)], {
                type: 'image/svg+xml'
            })
        )
    }, [props])

    return (
        <div className={'water-maker'} style={{ backgroundImage: `url(${svgUrl})` }}>
            {props.children}
        </div>
    )
}

export default memo(Index)
