export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ''

// Verificar si GA está disponible
export const isGAEnabled = GA_MEASUREMENT_ID.length > 0

// Eventos personalizados que vamos a trackear
export const Events = {
  // Waitlist
  WAITLIST_SIGNUP: 'waitlist_signup',
  WAITLIST_SIGNUP_SUCCESS: 'waitlist_signup_success',
  WAITLIST_SIGNUP_ERROR: 'waitlist_signup_error',
  WAITLIST_VIEW: 'waitlist_view',
  
  // Contact
  CONTACT_SUBMIT: 'contact_submit',
  CONTACT_SUBMIT_SUCCESS: 'contact_submit_success',
  CONTACT_SUBMIT_ERROR: 'contact_submit_error',
  CONTACT_VIEW: 'contact_view',
  
  // Reports
  REPORT_SUBMIT: 'report_submit',
  REPORT_SUBMIT_SUCCESS: 'report_submit_success',
  REPORT_SUBMIT_ERROR: 'report_submit_error',
  REPORT_VIEW: 'report_view',
  
  // Navigation
  NAVIGATION_CLICK: 'navigation_click',
  
  // Engagement
  FEATURE_CLICK: 'feature_click',
  CTA_CLICK: 'cta_click'
}

// Inicializar GA4
export const initGA = () => {
  
  if (globalThis.window !== undefined && isGAEnabled && !globalThis.window.gtag) {
    // Crear script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.async = true
    document.head.appendChild(script)

    // Inicializar gtag
    globalThis.window.dataLayer = globalThis.window.dataLayer || []
    globalThis.window.gtag = function gtag() {
      globalThis.window.dataLayer.push(arguments)
    }
    
    globalThis.window.gtag('js', new Date())
    globalThis.window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: globalThis.window.location.href
    })
    
    console.log('🔍 GA4 inicializado')
  }
}

// Helper functions para eventos comunes
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (globalThis.window?.gtag && isGAEnabled) {
    globalThis.window.gtag('event', eventName, params)
    console.log('🔍 GA Event:', eventName, params)
  }
}

export const trackPageView = (url: string) => {
  if (globalThis.window?.gtag && isGAEnabled) {
    globalThis.window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title
    })
  }
}

// Extender Window interface
declare global {
  interface Window {
    dataLayer: any[]
    gtag: Function
  }
}