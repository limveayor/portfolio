# Portfolio Project Overview

## Project Summary
This is a personal portfolio website for **Lim Veayor**, a Full Stack Developer and Quality Assurance Engineer. The website showcases professional experience, skills, projects, and provides a contact form for potential collaborations.

**Live URL:** https://limveayor.github.io/portfolio

## Technology Stack

### Core Technologies
- **React 18.3.1** - Frontend framework
- **Vite 6.0.1** - Build tool and development server
- **React Router DOM 6.28.0** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Animation & UI Libraries
- **Framer Motion 12.18.1** - Animation library for React components
- **AOS (Animate On Scroll) 2.3.4** - Scroll-triggered animations
- **Lucide React 0.513.0** - Icon library
- **React Icons 5.5.0** - Popular icon library

### Additional Libraries
- **@emailjs/browser 4.4.1** - Email service integration for contact form
- **Flowbite** - UI component library (loaded via CDN)

### Development Tools
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing
- **gh-pages** - GitHub Pages deployment

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── CV-Lim Veayor.pdf
│   │   │   ├── picture.JPG
│   │   │   └── picture1.jpg
│   │   └── programming.png
│   ├── components/
│   │   ├── AboutSection.jsx      # Professional experience section
│   │   ├── ContactSection.jsx    # Contact form with EmailJS
│   │   ├── Footer.jsx             # Site footer
│   │   ├── HeroSection.jsx        # Landing section with animated typing
│   │   ├── layout.jsx             # Main layout wrapper
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── ProjectSection.jsx     # Portfolio projects showcase
│   │   └── SkillSection.jsx       # Technical skills display
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── CoursePage.jsx
│   │   ├── HomePage.jsx           # Main page combining all sections
│   │   └── WorkPage.jsx
│   ├── App.jsx                    # Root component
│   ├── App.css                    # Component styles
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
└── eslint.config.js               # ESLint configuration
```

## Key Features

### 1. Hero Section (`HeroSection.jsx`)
- Animated typing effect cycling through job titles:
  - "Full Stack Developer"
  - "Quality Assurance Engineer"
  - "React.js & Spring Boot Specialist"
- Profile image display
- Social media links (GitHub, LinkedIn, Email)
- Animated tech stack icons (React, Spring Boot, Karate, JMeter, Java)
- Download CV button

### 2. About/Experience Section (`AboutSection.jsx`)
- Professional experience timeline:
  - **Front-end Developer & QA at CMED Construction** (Mar 2025 – Present)
  - **Intern at University of Cambodia** (Jan 2020 – May 2020)
  - **Intern Tester & Backend Dev at Amret Microfinance** (Jun 2023 – Dec 2024)
- Detailed responsibilities and achievements for each role
- Icons from Lucide React for visual enhancement

### 3. Skills Section (`SkillSection.jsx`)
- Interactive skill cards with progress bars
- Technologies displayed:
  - React.js (85%)
  - Java (90%)
  - Spring Boot (80%)
  - Tailwind CSS (75%)
  - MySQL (70%)
  - Git & GitHub (80%)
- Hover effects and animations

### 4. Projects Section (`ProjectSection.jsx`)
- Showcase of three main projects:
  - **Jalat** - Task management web app (Next.js, Spring Boot, JWT)
  - **Movie Store** - E-commerce platform (React, Tailwind CSS)
  - **Portal Testing API** - API testing tool (Java Spring Boot, Bootstrap, Karate)
- Framer Motion animations for card interactions
- Technology badges for each project

### 5. Contact Section (`ContactSection.jsx`)
- Contact form with EmailJS integration
- Form fields: Name, Email, Message
- Success/error status messages
- Responsive design

### 6. Navigation (`Navbar.jsx`)
- Smooth scroll navigation to sections:
  - About
  - Skills
  - Projects
  - Contact
- Responsive mobile menu

### 7. Footer (`Footer.jsx`)
- Copyright information
- Social media links
- Responsive layout

## Routing Configuration

The application uses React Router with:
- Base path: `/portfolio` (configured for GitHub Pages)
- Main layout component wrapping all routes
- Single-page application structure

## Styling Approach

- **Tailwind CSS** for utility-first styling
- Custom animations defined in `tailwind.config.js`:
  - `fade-in-up` - Fade and slide up animation
  - `zoom-in` - Zoom in effect
  - `slide-left` - Infinite sliding animation for tech icons
- Dark theme with gradient backgrounds (slate-900, blue-900, purple-900)
- Responsive design with mobile-first approach

## Animation Strategy

1. **AOS (Animate On Scroll)** - Applied to main sections for scroll-triggered animations
2. **Framer Motion** - Used in ProjectSection for interactive card animations
3. **Custom CSS Animations** - Typing effect in HeroSection, sliding tech icons
4. **Tailwind Transitions** - Hover effects and state changes

## Deployment

- **Platform:** GitHub Pages
- **Build Command:** `npm run build`
- **Deploy Command:** `npm run deploy` (uses gh-pages)
- **Base Path:** `/portfolio` (configured in vite.config.js and main.jsx)

## Development Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "vite build",            // Build for production
  "preview": "vite preview",        // Preview production build
  "lint": "eslint .",               // Run ESLint
  "predeploy": "npm run build",     // Build before deployment
  "deploy": "gh-pages -d dist"      // Deploy to GitHub Pages
}
```

## Configuration Files

### `vite.config.js`
- Base path set to `/portfolio` for GitHub Pages
- React plugin enabled
- JPG files included in assets

### `tailwind.config.js`
- Content paths configured for all JSX/TSX files
- Custom color palette (primary: #366B45, dark: #1f2020)
- Custom animations and keyframes
- Inter font family

### `main.jsx`
- React Router setup with BrowserRouter
- Base path configuration for GitHub Pages
- MainLayout component as root route

## Assets

- Profile images: `picture.JPG`, `picture1.jpg`
- CV document: `CV-Lim Veayor.pdf`
- Programming illustration: `programming.png`

## Contact Form Integration

The contact form uses EmailJS but requires configuration:
- Service ID: Currently placeholder (`your_service_id`)
- Template ID: Currently placeholder (`your_template_id`)
- User ID: Currently placeholder (`your_user_id`)

**Note:** These need to be configured with actual EmailJS credentials for the form to function.

## Browser Support

- Modern browsers with ES6+ support
- Responsive design for mobile, tablet, and desktop
- Uses CSS Grid and Flexbox for layouts

## Future Enhancements (Potential)

1. Complete EmailJS configuration for contact form
2. Add more project details and live demos
3. Implement blog section (if needed)
4. Add dark/light theme toggle
5. Add loading states and error boundaries
6. Implement analytics tracking
7. Add SEO optimization (meta tags, Open Graph)
8. Add unit tests for components

## Dependencies Summary

### Production Dependencies
- React ecosystem (react, react-dom, react-router-dom)
- UI/Animation libraries (framer-motion, lucide-react, react-icons)
- Email service (@emailjs/browser)
- Animation library (aos)

### Development Dependencies
- Build tools (vite, @vitejs/plugin-react)
- Styling (tailwindcss, postcss, autoprefixer)
- Code quality (eslint, eslint plugins)
- Deployment (gh-pages)
- TypeScript types (@types/react, @types/react-dom)

## Notes

- The Footer component still contains placeholder text ("Jane Doe") that should be updated
- Contact form EmailJS credentials need to be configured
- Some project links in ProjectSection are placeholders (#)
- The application is optimized for GitHub Pages deployment with base path configuration

---

**Last Updated:** Based on current project structure
**Maintainer:** Lim Veayor
**Repository:** https://github.com/limveayor/portfolio
