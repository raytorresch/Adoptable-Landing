import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnalyticsProvider } from '@/components/providers/analytics-provider'
import { DebugAnalytics } from '@/components/analytics/debug-analytics'
import { Suspense } from 'react'
import { useEffect } from 'react'
import { initGA, isGAEnabled } from '@/lib/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adoptable - Encuentra tu compañero perfecto',
  description: 'La plataforma de adopción de mascotas más moderna y segura',
}

// Loading component simple
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Cargando Adoptable...</p>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (isGAEnabled) {
      initGA()
    }
  }, [])

  return (
    <html lang="es">
      <head>
        {/* Google Analytics Script se carga desde el cliente */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<LoadingFallback />}>
          <AnalyticsProvider>
          <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </AnalyticsProvider>
        </Suspense>

        {/* Debug solo en desarrollo */}
        {process.env.NODE_ENV === 'development' && <DebugAnalytics />}
      </body>
    </html>
  )
}