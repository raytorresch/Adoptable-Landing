import { Button } from '@/components/ui/button'
import { Heart, Shield, Users, Zap } from 'lucide-react'
import { WaitlistForm } from '@/components/forms/waitlist-form'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Próximo lanzamiento
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Encuentra a tu 
              <span className="text-orange-600">compañero</span> 
              <br />
              perfecto
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Adoptable conecta mascotas con familias amorosas mediante 
              un proceso seguro, moderno y transparente. 
              La revolución en adopciones está aquí.
            </p>
            
            {/* Waitlist Form */}
            <WaitlistForm />
            
            {/* Blank Space */}
            <div className="h-16" />

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600 text-sm">Gratuito</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600 text-sm">Disponible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600 text-sm">Seguro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por qué elegir Adoptable
            </h2>
            <p className="text-gray-600 text-lg">
              Hacemos que el proceso de adopción sea seguro, simple y satisfactorio para todos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Seguro y Verificado</h3>
              <p className="text-gray-600 text-sm">
                Todas las mascotas y adoptantes pasan por un proceso de verificación.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Matches Perfectos</h3>
              <p className="text-gray-600 text-sm">
                Nuestro sistema conecta mascotas con familias ideales basado en compatibilidad.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Comunidad Activa</h3>
              <p className="text-gray-600 text-sm">
                Soporte continuo y comunidad de adoptantes para compartir experiencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para encontrar a tu nuevo mejor amigo?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a la lista de espera y sé notificado cuando lancemos oficialmente.
          </p>
          <Link href="/waitlist">
            <Button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg 
              font-semibold hover:bg-gray-400 transition-colors">
              Unirse a Lista de Espera
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}