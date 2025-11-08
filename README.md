# 🐾 Adoptable - Landing Page

> La plataforma de adopción de mascotas más moderna y segura. Conectando mascotas con familias amorosas.

##  Estado del Proyecto

**MVP Activo** - [https://adoptable-landing.vercel.app](https://adoptable-landing.vercel.app)

| Estado | Versión | Entorno |
|--------|---------|---------|
| ✅ **En Producción** | v1.0.0 | Vercel |

##  Características Implementadas

###  Landing Page Principal
- **Hero section** con value proposition
- **Formulario de waitlist** integrado con Firebase
- **Sección de características** y beneficios
- **Diseño responsive** (mobile-first)

###  Páginas de Contacto
- **Formulario de contacto** general
- **Sistema de reportes** (bugs, features, seguridad)
- **Información de contacto** y soporte

###  Legal y Soporte
- **Políticas de privacidad** adaptadas
- **Footer** con enlaces legales y navegación

##  Stack Tecnológico

```bash
Frontend:    Next.js 15 (App Router) + TypeScript
Styling:     Tailwind CSS
Database:    Firebase Firestore
Analytics:   Google Analytics 4
Deployment:  Vercel
Package Manager: pnpm
```
##  Desarrollo Rápido

### Prerrequisitos

```bash
Node.js 18+ 
pnpm 8+
```

### Instalación y Desarrollo

```bash
# Clonar repositorio
git clone <repository-url>
cd adoptable-landing

# Instalar dependencias
pnpm install

# Configurar environment variables
cp .env.example .env.local
# Editar .env.local con tus credenciales

#alternativa ejecutas script
node ./scripts/setup-env.js

# Ejecutar en desarrollo
pnpm dev
```

### Enviroment Variables

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# Google Analytics
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXX
```

### Estrucura del Proyecto

```text
adoptable-landing/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing principal
│   ├── contact/           # Página de contacto
│   ├── waitlist/          # Página de lista de espera
│   ├── report/            # Página de reportes
│   └── privacy/           # Políticas de privacidad
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Componentes reutilizables
│   └── forms/             # Formularios
├── lib/                   # Utilidades y servicios
└── public/               # Assets estáticos
```

## Próximos Pasos del MVP
- Configurar dominio personalizado
- Integración con servicio de email (Mailgun)
- Dashboard básico para ver leads
- Notificaciones automáticas

## Métricas de Éxito
- Conversión waitlist: >15% visitantes
- Tiempo de carga: <3s
- Form submissions: Sin errores técnicos
- Feedback temprano: 50+ emails en lista de esperaotificaciones automáticas

## Contribución
Este es un proyecto MVP para validación de mercado. Las contribuciones son bienvenidas una vez validado el producto.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.