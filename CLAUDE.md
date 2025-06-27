# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 corporate website for "株式会社月の庭" (Tsuki no Niwa Corporation), a Japanese company focused on creating dialogue-centered spaces and community building. The site is built with React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Core Structure
- **App Router**: Uses Next.js 13+ App Router pattern with route-based pages in `src/app/`
- **Components**: Reusable UI components in `src/components/`
- **API Routes**: Contact form handling in `src/app/api/`
- **Utilities**: Animation helpers in `src/utils/`

### Key Features
- **Multilingual Support**: Japanese content with English navigation
- **Email Integration**: Contact form using nodemailer with SMTP
- **Animation System**: GSAP-based animations with ScrollTrigger
- **SEO Optimization**: Comprehensive Open Graph and Twitter Card metadata
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Page Structure
- `/` - Home page with hero, news, and concept sections
- `/about` - Company information
- `/profile` - Team profiles  
- `/works` - Portfolio/work showcase
- `/shop` - E-commerce/products
- `/contact` - Contact form with email backend
- `/privacy-policy` & `/terms-of-service` - Legal pages

### Technical Details
- **Fonts**: Noto Serif JP (Japanese) and Lora (English) via Google Fonts
- **Styling**: Tailwind CSS with custom Japanese typography
- **State Management**: React hooks for menu state and scroll effects
- **Email System**: Nodemailer with automatic reply functionality
- **Build Config**: ESLint errors ignored during production builds

### Animation Implementation
- GSAP ScrollTrigger for scroll-based animations
- Fade-in sections with `.fade-in-section` class
- Header animations on page transitions
- Custom animation utilities in `src/utils/animations.js`

### Environment Variables Required
- `SMTP_HOST` - Email server host
- `SMTP_PORT` - Email server port
- `SMTP_USER` - Email authentication username
- `SMTP_PASS` - Email authentication password

### Path Aliases
- `@/*` maps to `./src/*` for clean imports