# Portafolio Profesional - Carlos del Ángel Ramírez

Un portafolio web moderno y profesional construido con Next.js 14, TypeScript, TailwindCSS y Framer Motion. Diseñado con un estilo minimalista y elegante, inspirado en Apple y Vercel, con soporte completo para modo oscuro/claro.

## 🚀 Características

- ✨ **Diseño Moderno**: Interfaz limpia, minimalista y elegante
- 🌓 **Modo Oscuro/Claro**: Toggle para cambiar entre temas con persistencia en localStorage
- 📱 **Totalmente Responsive**: Optimizado para móvil, tablet y escritorio
- 🎨 **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- ⚡ **Rendimiento Optimizado**: Construido con Next.js 14 App Router
- ♿ **Accesible**: Buenas prácticas de accesibilidad y SEO
- 🎯 **TypeScript**: Tipado estático para mayor seguridad en el código

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [TailwindCSS](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Scroll Suave**: [React Scroll](https://github.com/fisshy/react-scroll)

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ instalado
- npm, yarn, pnpm o bun

### Pasos

1. **Clonar el repositorio** (o descargar el código)

```bash
git clone <tu-repositorio>
cd mi-portafolio1
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📁 Estructura del Proyecto

```
mi-portafolio1/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal con metadata
│   ├── page.tsx             # Página principal
│   └── favicon.ico          # Favicon
├── components/
│   ├── AboutSection.tsx     # Sección "Sobre Mí"
│   ├── ContactSection.tsx   # Sección de contacto con formulario
│   ├── Footer.tsx           # Footer con redes sociales
│   ├── Header.tsx           # Header con navegación y toggle de tema
│   ├── HeroSection.tsx      # Sección hero principal
│   ├── ProjectsSection.tsx  # Grid de proyectos
│   ├── SkillsSection.tsx     # Sección de habilidades/tecnologías
│   └── ThemeProvider.tsx    # Provider para dark/light mode
├── public/
│   └── avatar.jpg           # Imagen de perfil (agregar tu imagen)
├── package.json
├── tailwind.config.js       # Configuración de TailwindCSS
├── tsconfig.json
└── README.md
```

## 🎨 Personalización

### Cambiar Información Personal

1. **Hero Section** (`components/HeroSection.tsx`):
   - Actualiza el nombre y descripción
   - Agrega tu foto de perfil en `/public/avatar.jpg`

2. **About Section** (`components/AboutSection.tsx`):
   - Modifica el texto biográfico
   - Ajusta las habilidades mostradas

3. **Projects Section** (`components/ProjectsSection.tsx`):
   - Actualiza el array `projects` con tus proyectos reales
   - Agrega imágenes de proyectos en `/public/`
   - Actualiza los links a demo y GitHub

4. **Skills Section** (`components/SkillsSection.tsx`):
   - Modifica el array `skills` con tus tecnologías
   - Ajusta los iconos y colores según necesites

5. **Contact Section** (`components/ContactSection.tsx`):
   - Actualiza la información de contacto (email, teléfono, ubicación)
   - Integra EmailJS o Formspree para el formulario

6. **Footer** (`components/Footer.tsx`):
   - Actualiza los links de redes sociales
   - Modifica el texto de copyright

7. **Metadata** (`app/layout.tsx`):
   - Actualiza el título y descripción para SEO

### Integrar EmailJS o Formspree

#### Opción 1: EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Instala el paquete:

```bash
npm install @emailjs/browser
```

4. Actualiza `components/ContactSection.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

#### Opción 2: Formspree

1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario y obtén el endpoint
3. Actualiza `components/ContactSection.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🚀 Deploy en Vercel

Vercel es la plataforma recomendada para desplegar aplicaciones Next.js. Sigue estos pasos:

### Opción 1: Deploy desde GitHub

1. **Sube tu código a GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repositorio-github>
git push -u origin main
```

2. **Conecta con Vercel**

   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Importa tu repositorio
   - Vercel detectará automáticamente Next.js y configurará todo
   - Haz clic en "Deploy"

3. **Variables de Entorno** (si usas EmailJS o APIs)

   - En la configuración del proyecto en Vercel
   - Ve a "Settings" > "Environment Variables"
   - Agrega las variables necesarias

### Opción 2: Deploy con Vercel CLI

1. **Instala Vercel CLI**

```bash
npm i -g vercel
```

2. **Inicia sesión**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

4. **Para producción**

```bash
vercel --prod
```

### Configuración Adicional

- **Dominio Personalizado**: En la configuración del proyecto, puedes agregar tu dominio personalizado
- **Analytics**: Vercel ofrece analytics integrado para Next.js
- **Preview Deployments**: Cada push a GitHub crea un preview deployment automático

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 🎯 Próximas Mejoras

- [ ] Integración con EmailJS/Formspree
- [ ] Agregar más proyectos con imágenes reales
- [ ] Implementar blog con MDX
- [ ] Agregar testimonios o recomendaciones
- [ ] Integrar Google Analytics
- [ ] Agregar más animaciones personalizadas
- [ ] Implementar i18n para múltiples idiomas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como base para tu propio portafolio.

## 👨‍💻 Autor

**Carlos del Ángel Ramírez**

- Ingeniero en Sistemas
- Desarrollador Full Stack
- Especializado en Next.js, React, Flutter y Blender 3D

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el framework increíble
- [TailwindCSS](https://tailwindcss.com/) por el sistema de diseño
- [Framer Motion](https://www.framer.com/motion/) por las animaciones fluidas
- [Lucide](https://lucide.dev/) por los iconos hermosos

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!
