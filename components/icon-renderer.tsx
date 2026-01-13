"use client"

import React from "react"

import { useMemo } from "react"
import * as LucideIcons from "lucide-react"
import { HelpCircle } from "lucide-react"

interface IconRendererProps {
    name: string
    className?: string
    fallbackClassName?: string
}

export const IconRenderer = React.memo(({ name, className = "h-7 w-7", fallbackClassName }: IconRendererProps) => {
    const IconComponent = useMemo(() => {
        const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name]
        return Icon || null
    }, [name])

    const DisplayIcon = IconComponent || HelpCircle
    const finalClassName = !IconComponent && fallbackClassName ? fallbackClassName : className

    return <DisplayIcon className={finalClassName} />
})

IconRenderer.displayName = "IconRenderer"
