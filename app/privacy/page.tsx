export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-600 mb-8">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
              <p className="mb-4">
                En Adoptable, nos comprometemos a proteger tu privacidad. Recopilamos la siguiente información:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Información de contacto:</strong> Email, nombre (formularios de contacto y lista de espera)</li>
                <li><strong>Datos de la aplicación:</strong> Preferencias de mascotas, ubicación para matching</li>
                <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, dispositivo</li>
                <li><strong>Datos de uso:</strong> Páginas visitadas, tiempo en el sitio, interacciones</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la Información</h2>
              <p className="mb-4">Utilizamos tu información para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Notificarte sobre el lanzamiento de Adoptable</li>
                <li>Crear matches entre mascotas y familias compatibles</li>
                <li>Mejorar nuestra plataforma y servicios</li>
                <li>Responder a tus consultas y solicitudes</li>
                <li>Personalizar tu experiencia de adopción</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Servicios de Terceros</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Firebase (Google)</h3>
                <p className="mb-2">
                  Utilizamos Firebase para almacenar datos de forma segura:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Emails de lista de espera</li>
                  <li>Formularios de contacto y reportes</li>
                  <li>Preferencias de usuarios</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  Los datos se almacenan en servidores seguros de Google Cloud.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Analytics</h3>
                <p>
                  Usamos Google Analytics para entender cómo interactúas con nuestro sitio y mejorar tu experiencia.
                  Esta información es anónima y no identifica personalmente a los usuarios.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Inicio de Sesión con Google</h3>
                <p>
                  En la aplicación móvil, podrás iniciar sesión con tu cuenta de Google. Solo accedemos a información 
                  básica de perfil (nombre, email) necesaria para crear tu cuenta en Adoptable.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Ubicación y Datos de Mascotas</h2>
              <p className="mb-4">
                Para proporcionarte el mejor servicio de matching:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Ubicación:</strong> Solicitamos tu ubicación para mostrarte mascotas disponibles 
                  cerca de ti y facilitar el proceso de adopción
                </li>
                <li>
                  <strong>Fotos de mascotas:</strong> Los refugios suben fotos de mascotas disponibles para adopción
                </li>
                <li>
                  <strong>Preferencias:</strong> Guardamos tus preferencias (tipo de mascota, tamaño, etc.) 
                  para recomendaciones personalizadas
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Puedes desactivar el acceso a la ubicación en cualquier momento desde la configuración de tu dispositivo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies y Tecnologías Similares</h2>
              <p className="mb-4">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recordar tus preferencias</li>
                <li>Analizar el uso del sitio web</li>
                <li>Mejorar el rendimiento y la seguridad</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Puedes desactivar las cookies desde la configuración de tu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad de los Datos</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad para proteger tu información:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceso restringido a información sensible</li>
                <li>Autenticación segura para inicios de sesión</li>
                <li>Monitoreo continuo de seguridad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tus Derechos</h2>
              <p className="mb-4">Tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar información inexacta</li>
                <li>Eliminar tu cuenta y datos asociados</li>
                <li>Oponerte al tratamiento de tus datos</li>
                <li>Portar tus datos a otro servicio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Menores de Edad</h2>
              <p>
                Nuestro servicio no está dirigido a menores de 13 años. Si eres padre/madre y crees que tu hijo 
                nos ha proporcionado información personal, contáctanos inmediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos 
                mediante un aviso en nuestro sitio web o por email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta política o quieres ejercer tus derechos, contáctanos en:
              </p>
              <p className="text-orange-600 font-semibold mt-2">
                hola@adoptable.com
              </p>
            </section>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-orange-900 mb-3">Compromiso con el Bienestar Animal</h3>
              <p className="text-orange-800 text-sm">
                En Adoptable, no solo protegemos tus datos, también nos comprometemos con el bienestar animal. 
                Tu información nos ayuda a conectar mascotas con familias amorosas de manera segura y responsable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}