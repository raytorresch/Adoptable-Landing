export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-MX')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                En Adoptable, recopilamos la siguiente información:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Dirección de correo electrónico (para lista de espera)</li>
                <li>Nombre e información de contacto (formularios)</li>
                <li>Información técnica (navegador, dispositivo, IP)</li>
                <li>Datos de uso a través de Google Analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la Información</h2>
              <p className="text-gray-700">
                Utilizamos tu información para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                <li>Notificarte sobre el lanzamiento de Adoptable</li>
                <li>Responder a tus consultas y solicitudes</li>
                <li>Mejorar nuestra plataforma y servicios</li>
                <li>Analizar tendencias de uso y comportamiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Almacenamiento y Seguridad</h2>
              <p className="text-gray-700 mb-4">
                Tus datos se almacenan de forma segura en Firebase (Google Cloud Platform) 
                y están protegidos mediante medidas de seguridad estándar de la industria.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700">
                Utilizamos Google Analytics para entender cómo interactúas con nuestro sitio. 
                Puedes desactivar las cookies desde la configuración de tu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
              <p className="text-gray-700 mb-4">
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar información inexacta</li>
                <li>Cancelar el uso de tus datos</li>
                <li>Oponerte al tratamiento de tus datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
              <p className="text-gray-700">
                Para ejercer tus derechos o hacer preguntas sobre esta política, 
                contáctanos en: <span className="text-orange-600">hola@adoptable.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}