import React from 'react'

export type ModalProps = {
    isModalOpen: boolean
    title: string
    width?: number
    okText?: string
    cancelText?: string
    setIsOpen: (values: any, type: any) => void
    footer?: number | null | React.ReactNode[]
    children?: React.ReactNode[] | string | React.ReactElement
}
