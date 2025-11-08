import { ReportForm } from '@/components/forms/report-form'
import { Bug, Lightbulb, Shield, MessageCircle } from 'lucide-react'

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Reportar un problema
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu feedback nos ayuda a mejorar Adoptable. Reporta bugs, sugiere features 
            o comparte cualquier problema que encuentres.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Qué puedes reportar?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bug className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Errores y Bugs</h3>
                    <p className="text-gray-600 text-sm">
                      Si algo no funciona como debería o ves un mensaje de error.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sugerencias</h3>
                    <p className="text-gray-600 text-sm">
                      Ideas para nuevas features o mejoras a las existentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Problemas de Seguridad</h3>
                    <p className="text-gray-600 text-sm">
                      Vulnerabilidades o comportamientos inseguros.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Feedback General</h3>
                    <p className="text-gray-600 text-sm">
                      Cualquier otra observación sobre tu experiencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Tips para un buen reporte
              </h3>
              <ul className="text-orange-800 text-sm space-y-2">
                <li>• Incluye pasos específicos para reproducir el problema</li>
                <li>• Menciona qué esperabas que pasara vs qué pasó realmente</li>
                <li>• Si es un bug, incluye la URL de la página o el nombre de la pantalla</li>
                <li>• ¡Sé específico y detallado!</li>
              </ul>
            </div>
          </div>

          {/* Report Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Crear reporte
              </h2>
              <p className="text-gray-600 mb-8">
                Resolvemos la mayoría de reportes en 24-48 horas
              </p>
              <ReportForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}