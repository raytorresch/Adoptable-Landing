'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitReport, type IssueType } from '@/lib/report-service'
import { CheckCircle, Loader2, Bug, Zap, Shield, Eye, Clock, AlertTriangle } from 'lucide-react'
import { trackEvent, Events } from '@/lib/analytics'

const ISSUE_TYPES: { value: IssueType; label: string; icon: React.ReactNode; description: string }[] = [
  {
    value: 'bug',
    label: 'Error/Bug',
    icon: <Bug className="w-4 h-4 text-gray-400" />,
    description: 'Algo no funciona correctamente'
  },
  {
    value: 'feature',
    label: 'Sugerencia',
    icon: <Zap className="w-4 h-4 text-gray-400" />,
    description: 'Tengo una idea para mejorar'
  },
  {
    value: 'ui_ux',
    label: 'Diseño/UX',
    icon: <Eye className="w-4 h-4 text-gray-400" />,
    description: 'Problema de usabilidad o diseño'
  },
  {
    value: 'security',
    label: 'Seguridad',
    icon: <Shield className="w-4 h-4 text-gray-400" />,
    description: 'Problema de seguridad'
  },
  {
    value: 'performance',
    label: 'Rendimiento',
    icon: <Clock className="w-4 h-4 text-gray-400" />,
    description: 'La aplicación va lenta'
  },
  {
    value: 'other',
    label: 'Otro',
    icon: <AlertTriangle className="w-4 h-4 text-gray-400" />,
    description: 'Otro tipo de problema'
  }
]

const URGENCY_LEVELS: { value: 'low' | 'medium' | 'high'; label: string; description: string }[] = [
  { value: 'low', label: 'Baja', description: 'Molesto pero no urgente' },
  { value: 'medium', label: 'Media', description: 'Importante pero no crítico' },
  { value: 'high', label: 'Alta', description: 'Crítico - bloquea funcionalidad' }
]

export function ReportForm() {
  const [formData, setFormData] = useState({
    email: '',
    issue_type: 'bug' as IssueType,
    description: '',
    urgency: 'medium' as 'low' | 'medium' | 'high',
    page_url: '',
    browser_info: typeof globalThis !== 'undefined' && 'navigator' in globalThis ? navigator.userAgent : ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    const result = await submitReport(formData)
    
    if (result.success) {
      setStatus('success')
      setFormData(prev => ({
        ...prev,
        description: '',
        page_url: '',
        urgency: 'medium'
      }))

      trackEvent(Events.REPORT_SUBMIT_SUCCESS, {
        email: formData.email,
        issue_type: formData.issue_type,
        urgency: formData.urgency
      })

      setTimeout(() => setStatus('idle'), 5000)
    } else {
      trackEvent(Events.REPORT_SUBMIT_ERROR, {
        email: formData.email,
        issue_type: formData.issue_type,
        urgency: formData.urgency,
        error: result.error || 'unknown_error'
      })

      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const getIssueTypeButtonClass = (typeValue: IssueType) => {
    return formData.issue_type === typeValue
      ? 'border-orange-500 bg-orange-50'
      : 'border-gray-200 bg-white hover:border-gray-300'
  }

  const getUrgencyButtonClass = (levelValue: 'low' | 'medium' | 'high') => {
    if (formData.urgency === levelValue) {
      if (levelValue === 'high') return 'border-red-500 bg-red-50'
      if (levelValue === 'medium') return 'border-orange-500 bg-orange-50'
      return 'border-green-500 bg-green-50'
    }
    return 'border-gray-200 bg-white hover:border-gray-300'
  }

  const getUrgencyTextClass = (levelValue: 'low' | 'medium' | 'high') => {
    if (levelValue === 'high') return 'text-red-700'
    if (levelValue === 'medium') return 'text-orange-700'
    return 'text-green-700'
  }

  const getButtonContent = () => {
    if (status === 'loading') {
      return (
        <>
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          Enviando reporte...
        </>
      )
    }
    
    if (status === 'success') {
      return (
        <>
          <CheckCircle className="w-4 h-4 mr-2" />
          ¡Reporte enviado!
        </>
      )
    }
    
    return 'Enviar reporte'
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email para contactarte *
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

      {/* Issue Type */}
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-gray-700">
          Tipo de problema *
        </legend>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ISSUE_TYPES.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, issue_type: type.value }))}
              className={`p-3 rounded-lg border-2 text-left transition-all ${getIssueTypeButtonClass(type.value)}`}
            >
              <div className="flex items-center gap-2 mb-1">
                {type.icon}
                <span className="font-medium text-sm text-gray-900">{type.label}</span>
              </div>
              <p className="text-xs text-gray-500">{type.description}</p>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Urgency */}
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-gray-700">
          Urgencia *
        </legend>
        <div className="grid grid-cols-3 gap-3">
          {URGENCY_LEVELS.map((level) => (
            <button
              key={level.value}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, urgency: level.value }))}
              className={`p-3 rounded-lg border-2 text-center transition-all ${getUrgencyButtonClass(level.value)}`}
            >
              <span className={`font-medium text-sm ${getUrgencyTextClass(level.value)}`}>
                {level.label}
              </span>
              <p className="text-xs text-gray-600 mt-1">{level.description}</p>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Page URL */}
      <div className="space-y-2">
        <label htmlFor="page_url" className="text-sm font-medium text-gray-700">
          Vista de la Aplicación o URL de la página (si aplica)
        </label>
        <Input
          id="page_url"
          name="page_url"
          value={formData.page_url}
          onChange={handleChange}
          disabled={status === 'loading'}
          placeholder="https://adoptable.com/contact..."
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-gray-700">
          Descripción detallada *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
          rows={6}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 resize-none"
          placeholder="Describe el problema o sugerencia con todo detalle. Incluye pasos para reproducir si es un bug..."
        />
      </div>

      {/* Submit Button */}
      <Button 
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full bg-orange-600 hover:bg-orange-700"
        size="lg"
      >
        {getButtonContent()}
      </Button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 text-sm">
            <strong>¡Gracias por tu reporte!</strong> Hemos recibido tu información y la revisaremos pronto.
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">
            <strong>Error al enviar.</strong> Por favor, intenta nuevamente o contáctanos directamente.
          </p>
        </div>
      )}
    </form>
  )
}