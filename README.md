# Extensions

Un administrador visual de extensiones de navegador construido con React, TypeScript y Tailwind CSS. Este proyecto de práctica enfatiza el diseño UI/UX

## ✨ Características

- **Filtros**: Visualiza todas las extensiones, solo activas o solo inactivas
- **Diseño responsive** adaptado a diferentes tamaños de pantalla
- **Soporte de tema oscuro/claro**

## 🚀 Tecnologías

- **React 18**
- **TypeScript**
- **Tailwind CSS v4**

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/chriszeroav/fm-browser-extension-manager.git

# Navegar al directorio
cd fm-browser-extension-manager

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

## 🛠️ Scripts Disponibles

```bash
pnpm dev          # Inicia el servidor de desarrollo
pnpm build        # Construye el proyecto para producción
pnpm preview      # Previsualiza la build de producción
```

## 📂 Estructura del Proyecto

```
src/
├── components/     # Componentes de React
│   ├── home/      # Vista principal y controles
│   └── ui/        # Componentes de UI reutilizables
├── contexts/      # Contextos de React (App, Theme)
├── hooks/         # Custom hooks
├── lib/           # Utilidades y helpers
├── reports/       # Componentes de reportes
└── types/         # Definiciones de TypeScript
```

## 🎯 Uso

1. La aplicación muestra una lista de extensiones de navegador simuladas
2. Usa los filtros superiores para ver:
   - **All**: Todas las extensiones
   - **Active**: Solo extensiones activas
   - **Inactive**: Solo extensiones inactivas
3. Cada tarjeta de extensión incluye:
   - Nombre e ícono
   - Descripción breve
   - Toggle de activación/desactivación
   - Botón de eliminación

## 📝 Notas

Este es un proyecto de práctica enfocado en la interfaz de usuario. No interactúa con extensiones reales del navegador, sino que utiliza datos simulados para demostrar las capacidades de UI/UX.

## 📄 Licencia

MIT

## 👨‍💻 Autor

[Chris Zero](https://github.com/chriszeroav)
