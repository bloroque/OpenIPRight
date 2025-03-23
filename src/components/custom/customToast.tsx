"use client"
import * as React from "react"
import {
    Toast,
    ToastProps,
    ToastClose,
    ToastTitle,
    ToastDescription,
    ToastProvider,
    ToastViewport
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/components/lib/utils"
import { ReactNode } from "react"

// Variant type definition
type ToastVariant = 'default' | 'success' | 'destructive' | 'warning' | 'info'

// Extended Toast Props interface
interface CustomToastProps extends ToastProps {
    title?: string
    description?: string
    className?: string
    classNameTitle?: string
    classNameDescription?: string
    action?: ReactNode
    duration?: number
    variant?: ToastVariant
    classNameLayout?: string
}

// Variant styles for different toast types
const variantStyles: Record<ToastVariant, string> = {
    default: "border-gray-200 bg-white text-slate-900",
    success: "border-green-500 bg-green-50 text-green-900",
    destructive: "border-red-500 bg-red-50 text-red-900",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900",
    info: "border-blue-500 bg-blue-50 text-blue-900",
}

// Title styles for different variants
const variantTitleStyles: Record<ToastVariant, string> = {
    default: "text-gray-900",
    success: "text-green-900",
    destructive: "text-red-900",
    warning: "text-yellow-900",
    info: "text-blue-900",
}

export function CustomToast({
    title,
    description,
    className,
    classNameTitle,
    classNameDescription,
    action,
    duration = 3000,
    variant = "default",
    classNameLayout,
    ...props
}: CustomToastProps) {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                    return (
                        <Toast
                            key={id}
                            {...props}
                            className={cn(
                                variantStyles[variant],
                                "border",
                                className
                            )}
                            duration={duration}
                        >
                            <div className={cn("grid gap-1", classNameLayout)}>
                                {title && (
                                    <ToastTitle
                                        className={cn(
                                            "font-bold",
                                            variantTitleStyles[variant],
                                            classNameTitle
                                        )}
                                    >
                                        {title}
                                    </ToastTitle>
                                )}
                                {description && (
                                    <ToastDescription
                                        className={cn(
                                            "text-sm text-wrap overflow-auto max-h-40",
                                            classNameDescription
                                        )}
                                    >
                                        {description}
                                    </ToastDescription>
                                )}

                                {action}

                                <ToastClose />
                            </div>
                        </Toast>
                    )
                }
            )}
            <ToastViewport />
        </ToastProvider>
    )
}

// Custom hook for toast functionality
export function useCustomToast() {
    const { toast } = useToast()
    return {
        customToast: ({
            title,
            description,
            action,
            duration = 3000,
            variant = "default",
            className,
            ...options
        }: CustomToastProps) =>
            toast({
                title,
                description,
                action,
                duration,
                variant,
                className: cn(className, variantStyles[variant]),
                ...options,
            }),
    }
}