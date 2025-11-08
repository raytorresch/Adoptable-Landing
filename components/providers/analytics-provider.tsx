'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { initGA, trackPageView, isGAEnabled } from '@/lib/analytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Inicializar GA en el cliente
    if (isGAEnabled) {
      initGA()
    }
  }, [])

  useEffect(() => {
    // Track page views cuando cambia la ruta
    if (isGAEnabled && pathname) {
      trackPageView(pathname)
    }
  }, [pathname])

  return <>{children}</>
}