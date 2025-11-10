import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; 2024 Adoptable. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
              Políticas de Privacidad
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
              Contacto
            </Link>
            <Link href="/report" className="text-gray-600 hover:text-gray-900 text-sm">
              Reportar Problema
            </Link>
            <Link href="/account/delete" className="text-gray-600 hover:text-gray-900 text-sm">
              Eliminar Cuenta
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}