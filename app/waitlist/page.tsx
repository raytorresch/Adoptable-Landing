import { WaitlistForm } from '@/components/forms/waitlist-form'
import { Users, Clock, Bell } from 'lucide-react'

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Únete a la Lista de Espera
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Se de los primeros en probar Adoptable y ayuda a mascotas a encontrar hogares amorosos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Beneficios exclusivos
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Acceso Anticipado</h3>
                    <p className="text-gray-600">
                      Se notificado antes del lanzamiento público y obtén acceso beta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Comunidad Exclusiva</h3>
                    <p className="text-gray-600">
                      Únete a nuestro grupo privado de early adopters y da feedback directo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Soporte Prioritario</h3>
                    <p className="text-gray-600">
                      Recibe atención personalizada y soporte rápido durante el beta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Reserva tu lugar
              </h2>
              <p className="text-gray-600 mb-6">
                Sólo te contactaremos para el lanzamiento. Sin spam.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}