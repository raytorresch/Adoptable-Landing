'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { initGA, trackPageView, isGAEnabled } from '@/lib/analytics'

export function AnalyticsProvider({ children }: { readonly children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Inicializar GA en el cliente
    if (isGAEnabled) {
      initGA()
    }
  }, [])

  useEffect(() => {
    // Track page views cuando cambia la ruta
    if (isGAEnabled) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      trackPageView(url)
    }
  }, [pathname, searchParams])

  return <>{children}</>
}