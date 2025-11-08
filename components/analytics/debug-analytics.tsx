'use client'

import { useEffect, useState } from 'react'
import { isGAEnabled } from '@/lib/analytics'

export function DebugAnalytics() {
  const [events, setEvents] = useState<string[]>([])
  console.log('debug-analytics');
  
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isGAEnabled) {
      // Interceptar eventos GA para debug
      const originalGtag = window.gtag
      
      window.gtag = function(...args: any[]) {
        console.log('🔍 GA Event:', args)
        setEvents(prev => [...prev.slice(-4), JSON.stringify(args)])
        originalGtag?.(...args)
      }
      
      return () => {
        window.gtag = originalGtag
      }
    }
  }, [])

  if (process.env.NODE_ENV !== 'development' || !isGAEnabled) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg max-w-sm max-h-64 overflow-auto text-xs z-50 border-2 border-orange-500">
      <div className="font-bold mb-2 text-orange-400">Analytics Debug</div>
      {events.map((event, i) => (
        <div key={i} className="mb-1 border-b border-gray-600 pb-1 font-mono">
          {event}
        </div>
      ))}
      {events.length === 0 && (
        <div className="text-gray-400">Esperando eventos...</div>
      )}
    </div>
  )
}