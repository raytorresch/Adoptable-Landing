import Link from 'next/link'
import { Heart } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <Heart className="h-8 w-8 text-[#ea580c]" />
                <span className="text-xl font-bold text-gray-900">Adoptable</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
                <Link href="/waitlist" className="text-gray-600 hover:text-gray-900">
                    Lista de Espera
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contacto
                </Link>
            </nav>
        </div>
      </div>
    </header>
  )
}