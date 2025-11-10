import { DeleteAccountForm } from '@/components/forms/delete-account-form';

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Eliminar Cuenta y Datos
            </h1>
            <p className="text-gray-600">
              Solicita la eliminación de tu información de Adoptable
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm font-bold">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">
                  Información importante
                </h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Esta acción no se puede deshacer</li>
                  <li>• Se eliminarán todos tus datos personales</li>
                  <li>• Perderás acceso a tu cuenta permanentemente</li>
                  <li>• Procesaremos tu solicitud en un máximo de 72 horas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Delete Form */}
          <DeleteAccountForm />

          {/* Alternative Methods */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Otros métodos de contacto</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>También puedes solicitar la eliminación de tu cuenta mediante:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Email:</strong> privacidad@adoptable.com</li>
                <li><strong>Formulario de contacto:</strong> <a href="/contact" className="text-orange-600 hover:underline">/contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}