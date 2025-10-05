# UnmatchedTournaments

Plataforma web para la gestión y organización de torneos del juego de mesa Unmatched. Este proyecto es un POC (Proof of Concept) que demuestra las capacidades de una aplicación moderna para comunidades de juegos de mesa.

## 🎯 Descripción del Proyecto

UnmatchedTournaments es una plataforma diseñada para:
- Descubrir y participar en torneos de Unmatched (presenciales y online)
- Mantenerse informado con las últimas noticias de la comunidad
- Organizar y gestionar torneos (funcionalidad en desarrollo)

## 🛠️ Stack Tecnológico

### Frontend
- **Astro 5.14.1** - Framework web moderno con arquitectura de islas
- **React 19.2.0** - Para componentes interactivos
- **TypeScript** - Type safety en todo el proyecto
- **Tailwind CSS 4.1.14** - Sistema de diseño utility-first
- **Ark UI 5.25.1** - Componentes accesibles y sin estilos predefinidos
- **Lucide React** - Iconos modernos y consistentes

### Testing
- **Vitest 3.2.4** - Framework de testing rápido

### Deployment
- **Vercel** - Configurado con @astrojs/vercel adapter

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI (Button, Link)
│   ├── Header.astro    # Navegación principal
│   ├── Footer.astro    # Pie de página
│   ├── Layout.astro    # Layout base
│   ├── NewsCard.astro  # Tarjeta de noticia
│   ├── NewsGrid.astro  # Grid de noticias
│   ├── TournamentList.astro      # Lista de torneos
│   └── TournamentSlider.tsx      # Slider de torneos con filtros
│
├── data/               # Datos centralizados
│   ├── news.ts        # Datos de noticias
│   └── tournaments.ts # Datos de torneos
│
├── pages/             # Rutas de la aplicación
│   ├── index.astro           # Página principal
│   ├── news/
│   │   ├── index.astro       # Lista de noticias
│   │   └── [slug].astro      # Detalle de noticia
│   ├── tournaments/
│   │   ├── index.astro       # Lista de torneos (vista calendario)
│   │   └── [slug].astro      # Detalle de torneo
│   └── dashboard/
│       └── organizer.astro   # Panel de organizador (en construcción)
│
└── styles/
    └── global.css     # Estilos globales y variables CSS
```

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primary (Verde Neón)**: `#00E676` - Color principal de la marca
- **Background**: Fondo oscuro (`#0A0A0A`)
- **Card**: Tarjetas con gradiente sutil
- **Border**: Bordes sutiles con opacidad

### Componentes Principales
1. **Button** - Botón reutilizable con variantes (default, outline, ghost)
2. **Link** - Enlaces con efectos hover
3. **NewsCard** - Tarjeta de noticia con imagen y metadata
4. **TournamentCard** - Tarjeta de torneo con fecha destacada

### Efectos Visuales
- **Glow Effect**: Sombras con color primario en hover
- **Hover Lift**: Elevación de tarjetas al pasar el mouse
- **Gradient Cards**: Fondos con gradientes sutiles
- **Scale Animations**: Zoom suave en imágenes

## 🗺️ Rutas de la Aplicación

### Públicas
- `/` - Página principal con grid de noticias destacadas y próximos torneos
- `/news` - Lista completa de noticias
- `/news/[slug]` - Detalle de una noticia específica
- `/tournaments` - Lista de torneos con vista de calendario
- `/tournaments/[slug]` - Detalle de un torneo específico
- `/dashboard/organizer` - Panel de organizador (en construcción)

### Rutas Legacy (mantener para compatibilidad)
- `/noticias` → Redirigir a `/news`
- `/torneos` → Redirigir a `/tournaments`

## 📊 Modelos de Datos

### Tournament
```typescript
interface Tournament {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: "presencial" | "online";
  location?: {
    venue: string;
    city: string;
  };
  image: string;
  status: "upcoming" | "past";
  participants?: number;
  maxParticipants?: number;
  prize?: string;
}
```

### NewsArticle
```typescript
interface NewsArticle {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}
```

## 🎯 Características Implementadas

### Página Principal
- Grid de 3 noticias destacadas (1 grande + 2 pequeñas)
- Lista de próximos 5 torneos en sidebar
- Slider horizontal de todos los torneos con filtros

### Sistema de Noticias
- Lista completa con metadata (fecha, tiempo de lectura, tags)
- Páginas de detalle con contenido HTML
- Diseño inspirado en blogs técnicos modernos

### Sistema de Torneos
- **Vista de calendario**: Agrupados por mes
- **Sidebar de fecha**: Día destacado en cada tarjeta
- **Filtros**: Online/Presencial + Ubicación
- **Estados visuales**: Próximos (color) vs Pasados (escala de grises)
- **Información completa**: Fecha, hora, ubicación, participantes, premios

### Panel de Organizador
- Página "en construcción" con preview de funcionalidades
- 4 características principales destacadas
- CTAs para volver al inicio o ver torneos

## 🚀 Comandos

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview de producción
pnpm preview

# Tests
pnpm test
```

## 🎨 Convenciones de Código

### Componentes
- **Astro components** (`.astro`) para contenido estático
- **React components** (`.tsx`) para interactividad (client:load)
- Usar TypeScript para type safety
- Props interfaces definidas en cada componente

### Estilos
- Tailwind CSS utility classes
- Variables CSS para colores del tema
- Clases personalizadas: `gradient-card`, `hover-lift`
- Responsive: mobile-first approach

### Datos
- Centralizados en `/src/data/`
- Exportar interfaces TypeScript
- Funciones helper para filtrado y ordenamiento

## 📝 Notas de Desarrollo

### Imágenes
Actualmente usando placeholders:
- `/hero-news-1.jpg`
- `/hero-news-2.jpg`
- `/hero-news-3.jpg`

### Próximas Funcionalidades
1. Sistema de autenticación
2. Panel de organizador completo
3. Sistema de inscripciones
4. Gestión de resultados
5. Rankings y estadísticas
6. Notificaciones

### Consideraciones de Diseño
- El verde neón (#00E676) es el color principal de la marca
- Fondo oscuro para mejor contraste
- Efectos de glow en elementos interactivos
- Animaciones suaves (300ms duration)
- Accesibilidad con Ark UI

## 🤝 Contribución

Este es un proyecto POC. Para contribuir:
1. Mantener la consistencia del sistema de diseño
2. Usar TypeScript para nuevos componentes
3. Seguir la estructura de carpetas establecida
4. Documentar cambios importantes en el README

## 📄 Licencia

Proyecto personal - Todos los derechos reservados
