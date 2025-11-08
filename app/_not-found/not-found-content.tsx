'use client'

import Link from 'next/link'
import { Home, Search } from 'lucide-react'

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
          <Link href="/" className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            <Home className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <Link href="/contact" className="flex items-center justify-center gap-2 w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors">
            <Search className="w-4 h-4" />
            Contactar soporte
          </Link>
        </div>
      </div>
    </div>
  )
}