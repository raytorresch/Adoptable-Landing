'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { addToWaitlist } from '@/lib/waitlist-service'
import { CheckCircle, Loader2 } from 'lucide-react'
import { trackEvent, Events } from '@/lib/analytics'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    const result = await addToWaitlist(email)
    
    if (result.success) {
      setStatus('success')
      setEmail('')

      trackEvent(Events.WAITLIST_SIGNUP_SUCCESS, {
        email: email,
        location: 'hero_section'
      })
      
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      setStatus('error')
      trackEvent(Events.WAITLIST_SIGNUP_ERROR, {
        email: email,
        location: 'hero_section',
        error: result.error || 'unknown_error'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input 
          type="email" 
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 text-center sm:text-left"
        />
        <Button 
          type="submit"
          disabled={status === 'loading' || status === 'success' || !email}
          className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap min-w-[160px]"
        >
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : status === 'success' ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            'Unirse a lista de espera'
          )}
        </Button>
      </div>
      
      {/* Status Messages */}
      {status === 'success' && (
        <p className="text-green-600 text-sm mt-3 text-center">
          ¡Perfecto! Te avisaremos cuando lancemos.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-3 text-center">
          Error al registrar. Intenta nuevamente.
        </p>
      )}
      
      <p className="text-sm text-gray-500 mt-3 text-center">
        Sé el primero en probar Adoptable. Sin spam.
      </p>
    </form>
  )
}