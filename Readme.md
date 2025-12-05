# Volalte Gir - Reciclaje de Neumáticos

Sitio web completo para **Volalte Gir**, empresa especializada en neumáticos reciclados al por mayor con sede en Barcelona.

## 📁 Estructura del Proyecto

```
├── index.html                    # Página de inicio
├── servicios.html                # Página de servicios
├── blog.html                     # Listado del blog
├── blog-exportar-africa.html     # Artículo: Exportar a África
├── blog-como-vender.html         # Artículo: Cómo vender neumáticos
├── contacto.html                 # Página de contacto (con mapa de Google)
├── distribuidor.html             # Página para distribuidores (¡NUEVA!)
├── sobre-nosotros.html           # Sobre Nosotros
├── styles.css                    # Estilos CSS (2000+ líneas)
├── script.js                     # JavaScript con sistema de traducción
└── Readme.md                     # Esta documentación
```

## 🌐 Páginas

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Inicio** | `index.html` | Hero, servicios, estadísticas, blog |
| **Servicios** | `servicios.html` | Detalles de recolección, clasificación, exportación |
| **Blog** | `blog.html` | Listado de artículos |
| **Contacto** | `contacto.html` | Formulario + info + **mapa Google Maps** |
| **Distribuidor** | `distribuidor.html` | Programa de distribuidores (diferente a contacto) |
| **Sobre Nosotros** | `sobre-nosotros.html` | Historia, misión, valores |

## 🌍 Sistema de Traducción Multi-idioma

El sitio incluye un **sistema de traducción completo** que cambia todo el texto de la página:

- 🇪🇸 **Español** (por defecto)
- 🏴󠁥󠁳󠁣󠁴󠁿 **Català**
- 🇫🇷 **Français**
- 🇬🇧 **English**

### ¿Cómo funciona?
1. El usuario selecciona un idioma del dropdown
2. Todo el texto de la página se traduce automáticamente
3. La preferencia se guarda en localStorage
4. El idioma persiste entre páginas y visitas

## ✨ Características

### Marca
- **Nombre**: Volalte Gir
- **Eslogan**: "Reciclaje de Neumáticos"
- **Email**: contacto@volalte.net
- **Teléfono**: +34 682 56 04 79

### Páginas Diferenciadas
- **Contáctanos**: Formulario general, información de contacto, mapa
- **Conviértete en Distribuidor**: Beneficios, proceso, requisitos, formulario específico

### Interactividad
- ✅ Menú móvil responsive
- ✅ Selector de idiomas funcional (ES/CA/FR/EN)
- ✅ Mapa de Google Maps integrado
- ✅ Contadores animados
- ✅ Animaciones al hacer scroll
- ✅ Validación de formularios
- ✅ Notificaciones toast
- ✅ Botón "volver arriba"

## 🚀 Cómo usar

### Opción 1: Abrir directamente
Simplemente abre `index.html` en tu navegador.

### Opción 2: Servidor local (recomendado)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000`

## 🎨 Tecnologías

- **HTML5**: Markup semántico
- **CSS3**: Custom properties, Flexbox, Grid, animaciones
- **JavaScript**: ES6+, localStorage, Intersection Observer
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Iconos**: Font Awesome 6
- **Mapas**: Google Maps Embed

## 🎯 Paleta de Colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--primary-green` | `#2E7D32` | Color principal |
| `--primary-green-dark` | `#1B5E20` | Estados hover |
| `--primary-green-light` | `#4CAF50` | Acentos |
| `--dark` | `#1A1A2E` | Textos, fondos |
| `--gray` | `#6B7280` | Texto secundario |
