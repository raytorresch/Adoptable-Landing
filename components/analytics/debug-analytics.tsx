'use client'

import { useEffect, useState } from 'react'
import { isGAEnabled } from '@/lib/analytics'

// Extend globalThis to include gtag
declare global {
  var gtag: ((...args: unknown[]) => void) | undefined
}

export function DebugAnalytics() {
  const [events, setEvents] = useState<Array<{ id: string; data: string }>>([])
  console.log('debug-analytics');
  
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isGAEnabled) {
      // Interceptar eventos GA para debug
      // use globalThis instead of window for SSR safety
      const originalGtag = globalThis.gtag
      
      globalThis.gtag = function(...args: unknown[]) {
        console.log('🔍 GA Event:', args)
        setEvents(prev => [...prev.slice(-4), { 
          id: `${Date.now()}-${Math.random()}`,
          data: JSON.stringify(args)
        }])
        originalGtag?.(...args)
      }
      
      return () => {
        globalThis.gtag = originalGtag
      }
    }
  }, [])

  if (process.env.NODE_ENV !== 'development' || !isGAEnabled) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg max-w-sm max-h-64 overflow-auto text-xs z-50 border-2 border-orange-500">
      <div className="font-bold mb-2 text-orange-400">Analytics Debug</div>
      {events.map((event) => (
        <div key={event.id} className="mb-1 border-b border-gray-600 pb-1 font-mono">
          {event.data}
        </div>
      ))}
      {events.length === 0 && (
        <div className="text-gray-400">Esperando eventos...</div>
      )}
    </div>
  )
}