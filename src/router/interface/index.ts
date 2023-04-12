import type React from 'react'

export interface MetaProps {
  title?: string
  keepAlive?: boolean
}

export interface RoutersProps {
  caseSensitive?: boolean
  children?: RoutersProps[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  meta?: MetaProps
  isLink?: string
}
