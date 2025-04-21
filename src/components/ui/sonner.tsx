'use client'

import { Toaster as SonnerToaster, toast as baseToast } from 'sonner'

export const Toaster = SonnerToaster

// 🔔 Generic toast
export const toast = (message: string, options?: Record<string, any>) => {
  baseToast(message, {
    position: 'bottom-center',
    duration: 3000,
    ...options,
  })
}

// ✅ Success toast
export const toastSuccess = (message: string, description?: string) => {
  baseToast.success(message, {
    description,
    duration: 3000,
    position: 'bottom-center',
  })
}

// ❌ Error toast
export const toastError = (message: string, description?: string) => {
  baseToast.error(message, {
    description,
    duration: 4000,
    position: 'bottom-center',
  })
}

// ⏳ Promise-based toast
export const toastPromise = <T,>(
  promise: Promise<T>,
  opts: {
    loading: string
    success: string | ((data: T) => string)
    error: string | ((err: any) => string)
  }
) => {
  return baseToast.promise(promise, {
    loading: opts.loading,
    success: opts.success,
    error: opts.error,
    position: 'bottom-center',
  })
}
