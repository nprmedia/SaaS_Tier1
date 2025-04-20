'use client'

import { Toaster as SonnerToaster, toast as baseToast } from 'sonner'

export const Toaster = SonnerToaster

export const toast = (message: string, options?: Record<string, any>) => {
  baseToast(message, {
    position: 'bottom-center',
    duration: 3000,
    ...options,
  })
}
