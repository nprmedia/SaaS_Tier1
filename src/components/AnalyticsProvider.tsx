'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { track } from '@/lib/analytics'

export const AnalyticsProvider = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const referrer = document.referrer
    const utmParams = Object.fromEntries(
      [...searchParams.entries()].filter(([key]) => key.startsWith('utm_'))
    )

    track('page_view', {
      pathname,
      referrer,
      ...utmParams,
    })
  }, [pathname])

  return null
}
