# Implementation Plan

- [x] 1. Create CareersHero component with video background and GSAP animations




  - [ ] 1.1 Create `src/components/sections/careers-hero.tsx` with VideoBackground component
    - Import VideoBackground, GSAP, ScrollTrigger, SectionTransition
    - Set up video with /video.mp4 and green overlay gradient (#3f7528)

    - Add decorative blur elements (lime-400/20, white/10)
    - _Requirements: 1.1, 1.7_
  - [ ] 1.2 Implement character-by-character title animation with GSAP
    - Create splitChars function for "SUMATE AL EQUIPO"

    - Implement timeline with rotateX: -90 to 0, stagger: 0.08
    - Add perspective: 1000px to title container
    - _Requirements: 1.3, 9.6_
  - [x] 1.3 Add hero content with badge, subtitle and stats

    - Badge with pulse indicator and "OPORTUNIDADES LABORALES" text
    - Animated subtitle with ScrollReveal fadeUp
    - Stats grid (90+ Empleados, 270 Hectáreas, 19 Años)
    - _Requirements: 1.2, 1.4, 1.6_




  - [ ] 1.4 Implement parallax scroll effect on hero content
    - Use GSAP ScrollTrigger with scrub: true
    - Move content y: 150 with opacity: 0 on scroll

    - Add SectionTransition wave to cream (#faf8f5)
    - _Requirements: 1.5, 1.7_

- [x] 2. Create CareersCulture component with parallax image and values



  - [ ] 2.1 Create `src/components/sections/careers-culture.tsx` with asymmetric layout
    - Grid layout: 2 columns on desktop, 1 on mobile
    - Left column: ParallaxImage with /about-trabajadores.png
    - Right column: Title, description, values list

    - _Requirements: 2.1, 2.2_
  - [ ] 2.2 Implement culture values list with staggered animations
    - Define 4 values: Pasión por la tierra, Trabajo en equipo, Crecimiento continuo, Sustentabilidad
    - Each value with icon, title, description
    - ScrollReveal with stagger 0.15s

    - _Requirements: 2.3, 2.4, 2.5_

- [ ] 3. Create CareersAreas component with premium work area cards
  - [x] 3.1 Create `src/components/sections/careers-areas.tsx` with card grid



    - Define 3 work areas: Campo, Empaquetadora, Administrativo
    - Grid: 3 columns desktop, 1 column mobile
    - Background beige (#f5f0e8) with SectionTransition
    - _Requirements: 3.1, 3.6_

  - [ ] 3.2 Implement premium card design with hover effects
    - Large icon (text-6xl), Playfair title, description
    - Task list with green bullet points
    - Season badge with rounded-full style

    - Hover: -translate-y-3, scale-[1.02], shadow-2xl
    - _Requirements: 3.2, 3.3, 3.4_
  - [ ] 3.3 Add staggered reveal animations to cards
    - ScrollReveal with animation="fadeUp"

    - Stagger delay 0.2s between cards


    - Transition duration 400ms ease-out
    - _Requirements: 3.5_


- [ ] 4. Create CareersBenefits component with dark background section
  - [ ] 4.1 Create `src/components/sections/careers-benefits.tsx` with dark theme
    - Background #1a3311 (verde muy oscuro)
    - Define 6 benefits with icons and descriptions

    - Grid: 3 columns desktop, 2 tablet, 1 mobile
    - _Requirements: 4.1, 4.2_
  - [ ] 4.2 Implement benefit cards with glassmorphism style
    - Background white/5 with backdrop-blur



    - Border white/10, hover: white/20
    - Icon text-4xl, title white, description white/70
    - _Requirements: 4.3_
  - [x] 4.3 Add section title and staggered animations

    - AnimatedTitle "¿Por Qué Trabajar en iKiwi?" in white
    - Subtitle in lime-300
    - ScrollReveal stagger 0.1s on cards
    - _Requirements: 4.4, 4.5_


- [ ] 5. Create CareersGallery component with masonry layout
  - [x] 5.1 Create `src/components/sections/careers-gallery.tsx` with asymmetric grid



    - Define 4 gallery images with different sizes
    - Grid: 4 columns with col-span variations
    - Background cream (#faf8f5)
    - _Requirements: 5.1, 5.2_

  - [ ] 5.2 Implement ParallaxImage with different speeds
    - Large image: speed 0.1
    - Medium images: speed 0.15
    - Small images: speed 0.2
    - _Requirements: 5.3_

  - [ ] 5.3 Add hover effects with zoom and overlay
    - Hover: scale-105 transition 500ms
    - Overlay gradient from-black/60
    - Caption text on hover



    - _Requirements: 5.4, 5.5_

- [ ] 6. Create CareersTestimonials component with quote cards
  - [x] 6.1 Create `src/components/sections/careers-testimonials.tsx` with testimonial data

    - Define 3 testimonials with quote, name, role, years
    - Grid: 3 columns desktop, 1 column mobile
    - Background cream (#faf8f5)
    - _Requirements: 7.1, 7.2_



  - [ ] 6.2 Implement testimonial card design
    - Large decorative quote mark (text-8xl, opacity-10)
    - Quote text italic, gray-600
    - Author section with avatar placeholder, name, role
    - _Requirements: 7.3, 7.5_

  - [ ] 6.3 Add staggered reveal animations
    - ScrollReveal fadeUp with stagger
    - Card shadow-lg, rounded-3xl
    - _Requirements: 7.4_


- [ ] 7. Create CareersForm component with premium styling
  - [ ] 7.1 Create `src/components/sections/careers-form.tsx` with form structure
    - Background beige (#f5f0e8)




    - Form container: white, rounded-3xl, shadow-xl
    - AnimatedTitle "Enviá Tu Postulación"
    - _Requirements: 6.1, 6.4, 6.6_
  - [x] 7.2 Implement form fields with premium styling

    - Inputs: rounded-xl, px-5 py-4, focus ring #3f7528
    - Select with custom chevron icon
    - File input with styled file button
    - Grid layout for name/email, phone/area rows

    - _Requirements: 6.2, 6.3_
  - [ ] 7.3 Add submit button and form animations
    - Button: rounded-full, bg-[#3f7528], hover scale-105
    - ScrollReveal on form container
    - Accessible labels with htmlFor
    - _Requirements: 6.5, 6.7, 11.1, 11.6_

- [ ] 8. Update main page to use new components
  - [ ] 8.1 Refactor `src/app/trabaja-con-nosotros/page.tsx` to import new components
    - Remove old inline sections
    - Import all new Careers* components
    - Import PageCTA for final section
    - _Requirements: 1.1, 8.1_
  - [ ] 8.2 Compose page with proper section order and transitions
    - Order: Hero → Culture → Areas → Benefits → Gallery → Testimonials → Form → CTA
    - Add SectionTransition between color changes
    - Configure PageCTA with RRHH contact info
    - _Requirements: 8.2, 8.3, 8.4, 8.5, 9.4_

- [ ] 9. Implement responsive design across all components
  - [ ] 9.1 Add responsive breakpoints to all grids
    - Areas: grid-cols-1 md:grid-cols-3
    - Benefits: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    - Gallery: grid-cols-2 md:grid-cols-4
    - Testimonials: grid-cols-1 lg:grid-cols-3
    - _Requirements: 10.1, 10.2, 10.6_
  - [ ] 9.2 Adjust typography sizes for mobile
    - Hero title: text-5xl md:text-7xl lg:text-9xl
    - Section titles: text-3xl md:text-4xl lg:text-5xl
    - Padding: py-16 md:py-24 lg:py-32
    - _Requirements: 10.3, 10.4_
  - [ ] 9.3 Ensure touch targets meet minimum size
    - Buttons: min-h-[44px] min-w-[44px]
    - Form inputs: py-4 for adequate height
    - Links with adequate padding
    - _Requirements: 10.5_

- [ ] 10. Add accessibility features
  - [ ] 10.1 Implement reduced motion support
    - Use useReducedMotion hook in all animated components
    - Fallback to instant display when motion reduced
    - Skip GSAP animations for reduced motion users
    - _Requirements: 9.5_
  - [ ] 10.2 Add ARIA attributes and semantic HTML
    - aria-label on icon-only buttons
    - aria-required on required form fields
    - Proper heading hierarchy (h1, h2, h3)
    - _Requirements: 11.2, 11.6_
  - [ ] 10.3 Verify color contrast and alt texts
    - All images with descriptive alt text
    - Contrast ratio 4.5:1 minimum
    - Focus indicators visible on all interactive elements
    - _Requirements: 11.3, 11.4, 11.5_

- [ ]* 11. Testing and validation
  - [ ]* 11.1 Visual testing across viewports
    - Test on 375px, 768px, 1024px, 1440px widths
    - Verify animations work correctly
    - Check section transitions are smooth
  - [ ]* 11.2 Functional testing
    - Form validation works correctly
    - External links open in new tabs
    - File upload accepts correct formats
  - [ ]* 11.3 Accessibility testing
    - Run axe-core audit
    - Test keyboard navigation
    - Verify screen reader compatibility
