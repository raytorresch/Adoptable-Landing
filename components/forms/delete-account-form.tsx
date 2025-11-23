'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AlertTriangle, CheckCircle, Loader2 } from 'lucide-react'

export function DeleteAccountForm() {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirmation: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validación de confirmación
    if (formData.confirmation.toLowerCase() !== 'eliminar mi cuenta') {
      alert('Por favor, escribe "eliminar mi cuenta" para confirmar')
      return
    }

    setStatus('loading')

    try {
      // Enviar solicitud a Firestore
      const response = await fetch('/api/account/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ email: '', reason: '', confirmation: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting deletion request:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const getButtonContent = () => {
    if (status === 'loading') {
      return (
        <>
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          Procesando solicitud...
        </>
      )
    }
    
    if (status === 'success') {
      return (
        <>
          <CheckCircle className="w-4 h-4 mr-2" />
          Solicitud enviada
        </>
      )
    }
    
    return (
      <>
        <AlertTriangle className="w-4 h-4 mr-2" />
        Solicitar eliminación de cuenta
      </>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email de tu cuenta *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          placeholder="tu@email.com"
        />
      </div>

      {/* Reason Field */}
      <div className="space-y-2">
        <label htmlFor="reason" className="text-sm font-medium text-gray-700">
          Razón de la eliminación (opcional)
        </label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          disabled={status === 'loading'}
          rows={3}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 resize-none"
          placeholder="¿Por qué quieres eliminar tu cuenta?"
        />
      </div>

      {/* Confirmation Field */}
      <div className="space-y-2">
        <label htmlFor="confirmation" className="text-sm font-medium text-gray-700">
          Confirmación *
        </label>
        <Input
          id="confirmation"
          name="confirmation"
          value={formData.confirmation}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          placeholder='Escribe "eliminar mi cuenta" para confirmar'
        />
        <p className="text-xs text-gray-500">
          Escribe exactamente: <strong>eliminar mi cuenta</strong>
        </p>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full bg-red-600 hover:bg-red-700 text-white"
        size="lg"
      >
        {getButtonContent()}
      </Button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 text-sm">
            <strong>✅ Solicitud recibida</strong>. Hemos recibido tu solicitud de eliminación de cuenta. 
            Te contactaremos en un máximo de 72 horas para confirmar la eliminación completa de tus datos.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">
            <strong>❌ Error al procesar</strong>. Por favor, intenta nuevamente o contáctanos directamente a{' '}
            <span className="font-semibold">privacidad@adoptable.com</span>
          </p>
        </div>
      )}
    </form>
  )
}