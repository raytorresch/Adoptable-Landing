'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitContactForm } from '@/lib/contact-service'
import { CheckCircle, Loader2, Mail, User, MessageSquare } from 'lucide-react'
import { trackEvent, Events } from '@/lib/analytics'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    const result = await submitContactForm(formData)
    
    if (result.success) {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      trackEvent(Events.WAITLIST_SIGNUP_SUCCESS, {
        email: formData.email,
        location: 'hero_section'
      })
      
      setTimeout(() => setStatus('idle'), 5000)      
    } else {
      setStatus('error')
      trackEvent(Events.WAITLIST_SIGNUP_ERROR, {
        email: formData.email,
        location: 'hero_section',
        error: result.error || 'unknown_error'
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <User className="w-4 h-4" />
            Nombre completo *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            placeholder="Tu nombre"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4" />
            Email *
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
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Asunto *
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          placeholder="¿Cómo podemos ayudarte?"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <MessageSquare className="w-4 h-4" />
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          rows={6}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 resize-none"
          placeholder="Cuéntanos más detalles..."
        />
      </div>

      {/* Submit Button */}
      <Button 
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full bg-orange-600 hover:bg-orange-700"
        size="lg"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Enviando...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            ¡Mensaje enviado!
          </>
        ) : (
          'Enviar mensaje'
        )}
      </Button>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="text-green-600 text-sm text-center">
          Gracias por tu mensaje. Te contactaremos pronto.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Error al enviar. Por favor, intenta nuevamente.
        </p>
      )}
    </form>
  )
}