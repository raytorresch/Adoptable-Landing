import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnalyticsProvider } from '@/components/providers/analytics-provider'
import { DebugAnalytics } from '@/components/analytics/debug-analytics'
import { Suspense } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adoptable - Encuentra tu compañero perfecto',
  description: 'La plataforma de adopción de mascotas más moderna y segura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <head>
        {/* Google Analytics Script se carga desde el cliente */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={null}>
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