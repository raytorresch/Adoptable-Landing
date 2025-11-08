'use client'

import Link from 'next/link'
import { Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFoundContent() {
  return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página no encontrada</h2>
            <p className="text-gray-600 mb-8">
              La página que buscas no existe o ha sido movida.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/" className="w-full inline-block">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
            
            <Link href="/contact" className="w-full inline-block">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                Contactar soporte
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
}