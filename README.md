# Jornada de Ciencia y Tecnología Cuántica - Sitio Web Oficial

Sitio web estático y responsivo para la **Jornada de Ciencia y Tecnología Cuántica** de la Universidad de Cartagena. Evento académico programado para el 15, 16 y 17 de septiembre de 2025.

## 📋 Características

- **Diseño temático cuántico**: Estética espacial con partículas animadas y gradientes cósmicos
- **Completamente responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones avanzadas**: Efectos de scroll reveal, parallax y micro-interacciones
- **Formulario funcional**: Validación front-end y experiencia UX optimizada
- **SEO optimizado**: Meta tags, Open Graph y estructura semántica
- **Performance optimizada**: Imágenes lazy-loading y código minificado

## 🎨 Paleta de Colores

- **Azul oscuro cuántico**: `#0B0F2C`
- **Púrpura profundo**: `#4B0082`
- **Naranja cósmico**: `#FF8C00`
- **Blanco**: `#FFFFFF`

## 🚀 Instalación y Configuración

### 1. Descomprimir el archivo

```bash
# Extraer el archivo ZIP
unzip jornada-cuantica-website.zip

# Navegar al directorio
cd jornada-cuantica-website
```

### 2. Estructura de archivos

```
/
├── index.html
├── README.md
├── css/
│   ├── style.css
│   └── style.min.css
├── js/
│   ├── main.js
│   └── main.min.js
├── assets/
│   ├── images/
│   │   ├── hero.webp
│   │   ├── speaker-1.jpg
│   │   ├── speaker-2.jpg
│   │   ├── speaker-3.jpg
│   │   └── sponsor-logo-*.png
│   ├── fonts/
│   └── icons/
└── manifest.json
```

## 🌐 Publicación en GitHub Pages

### Pasos detallados:

1. **Crear repositorio en GitHub**
   ```bash
   # Inicializar git en el directorio del proyecto
   git init
   
   # Añadir todos los archivos
   git add .
   
   # Commit inicial
   git commit -m "Initial commit - Quantum Event Website"
   
   # Añadir origin (reemplaza 'tu-usuario' y 'nombre-repo')
   git remote add origin https://github.com/tu-usuario/nombre-repo.git
   
   # Subir archivos
   git push -u origin main
   ```

2. **Activar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Clic en **Settings** (Configuración)
   - Scroll down hasta **Pages**
   - En **Source**, selecciona **Deploy from a branch**
   - Selecciona **main** branch y **/ (root)**
   - Clic en **Save**

3. **Acceder al sitio**
   - URL del sitio: `https://tu-usuario.github.io/nombre-repo`
   - GitHub proporcionará la URL completa después de la activación

## 🎯 Integración con Go High Level (GHL)

### Opción 1: Usando GitHub Pages como CDN

Una vez publicado en GitHub Pages, puedes referenciar los archivos directamente:

```html
<!-- En tu página de GHL, añade en el Custom HTML -->
<link rel="stylesheet" href="https://tu-usuario.github.io/nombre-repo/css/style.min.css">

<!-- Al final del body -->
<script src="https://tu-usuario.github.io/nombre-repo/js/main.min.js"></script>
```

### Opción 2: Copy-Paste Directo en GHL

#### A. HTML Personalizado (Custom HTML Block)

```html
<!-- COPIAR TODO EL CONTENIDO DEL <body> desde index.html -->
<!-- Pegar en un Custom HTML Block en GHL -->

<!-- Navigation -->
<nav class="navbar" id="navbar">
    <!-- ... contenido completo del nav ... -->
</nav>

<!-- Hero Section -->
<section id="inicio" class="hero">
    <!-- ... contenido completo del hero ... -->
</section>

<!-- ... resto de secciones ... -->
```

#### B. CSS Personalizado (Custom CSS)

En la sección de **CSS personalizado** de GHL, pegar:

```css
/* COPIAR TODO EL CONTENIDO de css/style.min.css */
/* Pegar directamente en el campo Custom CSS de GHL */

*{margin:0;padding:0;box-sizing:border-box}:root{--quantum-dark:#0B0F2C;--quantum-purple:#4B0082;--cosmic-orange:#FF8C00;--white:#FFFFFF;/* ... resto del CSS minificado ... */}
```

#### C. Código de Seguimiento (Tracking Code)

En el **Footer Code** o **Tracking Code** de GHL, añadir:

```html
<!-- AOS Animation Library -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- JavaScript Principal -->
<script>
// COPIAR TODO EL CONTENIDO de js/main.min.js
// Pegar aquí el código JavaScript minificado
!function(){"use strict";function e(){/* ... código minificado ... */}
</script>
```

### Template Completo para GHL

#### 1. Custom HTML Section:
```html
<!-- Navigation -->
<nav class="navbar" id="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <img src="https://unicartagena.edu.co/images/logo/logo-oficial-a-color.png" alt="Universidad de Cartagena" class="logo">
            <span>Jornada Cuántica 2025</span>
        </div>
        <!-- ... resto del contenido ... -->
    </div>
</nav>
<!-- ... resto de secciones ... -->
```

#### 2. Custom CSS (pegar contenido completo de style.min.css)

#### 3. Header Scripts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<meta name="theme-color" content="#0B0F2C">
```

#### 4. Footer Scripts:
```html
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<!-- Contenido de main.min.js -->
```

## 📚 Librerías CDN Utilizadas

### AOS (Animate On Scroll)
- **URL CSS**: `https://unpkg.com/aos@2.3.1/dist/aos.css`
- **URL JS**: `https://unpkg.com/aos@2.3.1/dist/aos.js`
- **Propósito**: Animaciones de aparición al hacer scroll
- **Documentación**: [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)

### Google Fonts - Poppins
- **URL**: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap`
- **Propósito**: Fuente principal del sitio
- **Pesos utilizados**: 300, 400, 500, 600, 700

## ⚡ Optimizaciones de Performance

- **CSS y JS minificados**: Archivos comprimidos para carga rápida
- **Lazy loading**: Imágenes se cargan solo cuando son necesarias
- **Preload crítico**: Recursos importantes se precargan
- **Animaciones optimizadas**: Uso de `transform` y `opacity` para mejor rendimiento

## 📱 Características Responsive

### Breakpoints utilizados:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile pequeño**: < 480px

## 🔧 Personalización

### Cambiar colores:
Modifica las variables CSS en `:root`:
```css
:root {
    --quantum-dark: #0B0F2C;
    --quantum-purple: #4B0082;
    --cosmic-orange: #FF8C00;
    --white: #FFFFFF;
}
```

### Modificar fechas del evento:
En `js/main.js`, línea del contador:
```javascript
const targetDate = new Date('2025-09-15T09:00:00').getTime();
```

### Personalizar formulario:
El formulario tiene validación front-end. Para conectar con un backend real, modifica la función de envío en `js/main.js`.

## 🌟 Funcionalidades Principales

1. **Navegación fija**: Navbar con efecto de scroll
2. **Contador regresivo**: Cuenta hacia la fecha del evento
3. **Animaciones de partículas**: Efecto visual en el hero
4. **Formulario validado**: Registro con validación en tiempo real
5. **Modal de confirmación**: Feedback al usuario tras registro
6. **Carrusel de patrocinadores**: Scroll automático
7. **Google Maps integrado**: Ubicación del evento
8. **Responsive completo**: Funciona en todos los dispositivos

## 📧 Configuración de Envío de Formularios

Para conectar el formulario con un servicio real de email (ej: Formspree, EmailJS):

```javascript
// En main.js, reemplazar la simulación con:
const formData = new FormData(form);

fetch('TU_ENDPOINT_AQUI', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    showSuccessModal();
    form.reset();
})
.catch(error => {
    console.error('Error:', error);
});
```

## 🛠️ Soporte y Mantenimiento

- **Compatibilidad**: Todos los navegadores modernos (Chrome, Firefox, Safari, Edge)
- **Accesibilidad**: Cumple estándares WCAG 2.1
- **SEO**: Optimizado para motores de búsqueda
- **Performance**: Puntuación alta en PageSpeed Insights

## 📝 Notas Adicionales

1. **Imágenes placeholder**: Las imágenes de ejemplo deben ser reemplazadas por las reales del evento
2. **Contenido editable**: Todos los textos pueden modificarse directamente en `index.html`
3. **Analytics**: Preparado para integración con Google Analytics (ver `main.js`)
4. **PWA Ready**: Incluye `manifest.json` para funcionalidad de aplicación web

---

**Desarrollado con ❤️ para la comunidad científica colombiana**

*Universidad de Cartagena - Jornada de Ciencia y Tecnología Cuántica 2025*