import './style.css'
import { Application } from '@splinetool/runtime';

// Testimonials Data
const testimonials = [
  {
    title: "Clear Thinking",
    description: "A strong focus on understanding the real problem before building the solution."
  },
  {
    title: "Practical Solutions",
    description: "Systems designed to simplify workflows and make everyday work easier."
  },
  {
    title: "Reliable Execution",
    description: "Carefully built systems that remain stable, secure, and ready to scale."
  }
];

// About Data
const aboutCards = [
  {
    title: "Problem Solving",
    description: "Every project begins with understanding the real problem. Solutions are designed to simplify processes and make work easier."
  },
  {
    title: "Scalable Systems",
    description: "Systems are built to grow with your business, handling increasing complexity without slowing down."
  },
  {
    title: "Reliable Foundations",
    description: "Strong architecture and careful engineering ensure every system remains secure, stable, and dependable."
  }
];

// Services Data
const servicesData = [
  {
    title: "Business Systems",
    description: "Custom systems designed to simplify operations, manage workflows, and support everyday business processes.",
    icon: '<svg viewBox="0 0 24 24" fill="none" class="w-8 h-8 text-blue-500" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
  },
  {
    title: "Automation Tools",
    description: "Tools that reduce repetitive work and automate tasks so teams can focus on more valuable work.",
    icon: '<svg viewBox="0 0 24 24" fill="none" class="w-8 h-8 text-purple-500" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
  },
  {
    title: "Software Platforms",
    description: "Scalable applications and platforms built to support growing products, services, and internal operations.",
    icon: '<svg viewBox="0 0 24 24" fill="none" class="w-8 h-8 text-yellow-500" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
  },
  {
    title: "Intelligent Solutions",
    description: "Advanced systems that use data, automation, and intelligent logic to improve how businesses operate.",
    icon: '<svg viewBox="0 0 24 24" fill="none" class="w-8 h-8 text-emerald-500" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'
  }
];

// Content Generation
const testimonialCardsHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <h3>${t.title}</h3>
      <p class="card-text">${t.description}</p>
    </div>
`).join('');

const marqueeContentHTML = Array(4).fill(testimonialCardsHTML).join('');

const aboutGridHTML = aboutCards.map(c => `
      <div class="about-card">
        <h3>${c.title}</h3>
        <p>${c.description}</p>
      </div>
`).join('');

const servicesGridHTML = servicesData.map(s => `
      <div class="about-card">
        <div class="card-icon mb-4">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>
`).join('');

// Main App Template
document.querySelector('#app').innerHTML = `
  <header>
    <div class="logo">AARNA LABS</div>
    <div class="nav-wrapper">
      <nav>
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Process</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
    <button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </header>

  <!-- Mobile Nav Overlay -->
  <div class="mobile-nav-overlay" id="mobileNavOverlay">
    <nav class="mobile-nav">
      <a href="#home" class="mobile-nav-link active">Home</a>
      <a href="#about" class="mobile-nav-link">About</a>
      <a href="#services" class="mobile-nav-link">Services</a>
      <a href="#testimonials" class="mobile-nav-link">Testimonials</a>
      <a href="#contact" class="mobile-nav-link">Contact</a>
    </nav>
    <div class="mobile-nav-footer">
      <a href="mailto:hello@aarnalabs.ai" class="mobile-nav-cta">Let's Talk →</a>
    </div>
  </div>

    <main id="home" class="hero">
      <div id="canvas-container"></div>
      <div class="hero-content hero-split-layout">
           <div class="hero-left">
              <div class="brand-name">AARNA LABS</div>
              <div class="brand-tagline">Intelligent Systems Studio</div>
           </div>
           <div class="hero-right">
              <h1 class="hero-headline">Building the systems behind better businesses.</h1>
              <p class="hero-description">
                Turning ideas into real products.
              </p>
              <div class="hero-features">
                Design · Software · Automation · Intelligence
              </div>
           </div>
      </div>

      <div class="hero-footer">
        <div class="trusted-label">Built with technologies like</div>
        <div class="footer-marquee-container">
          <div class="footer-marquee-content">
            ${Array(2).fill(`
              <div class="footer-logo-item" title="Python">
                <svg class="logo-icon" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="pyA" x1="12.96%" y1="12.07%" x2="79.64%" y2="78.8%"><stop offset="0%" stop-color="#387EB8"/><stop offset="100%" stop-color="#366994"/></linearGradient><linearGradient id="pyB" x1="19.13%" y1="20.58%" x2="90.43%" y2="88.01%"><stop offset="0%" stop-color="#FFE052"/><stop offset="100%" stop-color="#FFC331"/></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#pyA)"/><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#pyB)"/></svg>
              </div>
              <div class="footer-logo-item" title="TensorFlow">
                <svg class="logo-icon" viewBox="0 0 256 274" xmlns="http://www.w3.org/2000/svg"><path d="M145.726 42.065v42.07l72.862 42.068v-42.07L145.726 42.07zM0 126.197l36.57 21.032v126.2l36.57-21.034V148.225l72.586 41.885v-42.07L0 63.13v63.067zm218.588 63.065l-36.568 21.034v84.131l36.568-21.034v-84.13zm-72.862 42.065v84.131l36.294-21.034V226.29l-36.294-21.033z" fill="#E55B2D"/><path d="M145.726 0L0 84.196l36.57 21.032L145.727 42.07l72.862 42.068 36.568-21.034L145.726 0zm0 84.131l-36.294 21.034 36.294 21.032 36.294-21.032-36.294-21.034z" fill="#FF8A00"/><path d="M109.432 189.108l36.294 21.034v-42.068l-36.294-21.034v42.068zm0 63.131l36.294 21.034v-42.068l-36.294-21.034v42.068z" fill="#C74D1A"/></svg>
              </div>
              <div class="footer-logo-item" title="OpenAI">
                <svg class="logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.992 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#10A37F"/></svg>
              </div>
              <div class="footer-logo-item" title="React">
                <svg class="logo-icon" viewBox="0 0 256 228" xmlns="http://www.w3.org/2000/svg"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.986 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855q2.6-2.274 5.163-4.746a164.093 164.093 0 0 0 5.765 5.356c21.94 19.098 43.838 26.696 57.222 18.95 13.847-8.01 18.295-31.645 12.567-61.006a160.005 160.005 0 0 0-1.584-7.075 145.312 145.312 0 0 0 8.13-2.53c27.16-9.679 44.645-25.191 44.645-40.766 0-14.856-16.281-29.636-42.483-39.148zM130.073 225.6c-16.727 14.846-33.56 20.508-42.48 15.36-9.292-5.367-12.68-24.074-8.013-48.76a151.95 151.95 0 0 1 1.87-8.512c10.96 2.442 22.803 4.167 35.272 5.107 7.453 10.28 15.372 19.774 23.67 28.232a147.508 147.508 0 0 1-4.835 4.406 115.53 115.53 0 0 1-5.484 4.167zm-52.063-55.21a376.285 376.285 0 0 1-7.09-12.637 378.93 378.93 0 0 1 14.653-1.565c2.507 4.427 5.14 8.832 7.907 13.19a365.005 365.005 0 0 1-15.47 1.012zm-10.876-39.19c-1.376-5.116-2.432-10.143-3.158-15.035 4.932-1.15 10.287-2.155 15.981-3 2.72-4.449 5.584-8.865 8.578-13.216a365.534 365.534 0 0 1-7.142 12.76 371.89 371.89 0 0 1-14.26 18.49zM128.07 39.79c8.487 8.628 16.571 18.308 24.102 28.764-7.894-.408-15.937-.612-24.098-.612-8.206 0-16.268.198-24.13.588 7.424-10.364 15.39-19.964 23.77-28.526a142.52 142.52 0 0 1 .357-.214zm22.113 62.124c3.894 6.68 7.574 13.503 10.968 20.444-3.467.84-7.092 1.618-10.856 2.32a347.64 347.64 0 0 0-10.896-20.393l10.784-2.37zm-44.472-.02l10.97 2.39a347.64 347.64 0 0 0-10.835 20.297c-3.74-.704-7.347-1.487-10.794-2.33 3.394-6.916 7.065-13.714 10.66-20.356zM68.834 145.18c-16.6-5.69-27.687-14.388-27.687-22.88 0-8.828 12.31-18.36 30.316-24.265a128.852 128.852 0 0 1 8.717-2.733c3.23 10.62 7.395 21.747 12.506 33.152-5.2 11.552-9.428 22.818-12.627 33.573a130.652 130.652 0 0 1-11.225-16.847zm78.056 37.217c12.412.655 24.172.157 34.923-1.308a143.65 143.65 0 0 1 1.47 6.576c5.283 27.016 1.882 47.792-7.798 53.388-10.106 5.84-28.754-1.145-48.197-18.07a147.502 147.502 0 0 1-5.325-4.975c8.155-8.35 15.98-17.696 23.323-27.935 8.28-.957 16.156-2.363 23.604-4.192a136.05 136.05 0 0 1-12 8.52 116.91 116.91 0 0 1-10 12.003zm35.54-32.648c16.012 5.884 27.42 14.41 27.42 22.626 0 8.884-12.895 18.927-31.567 25.078a128.73 128.73 0 0 1-7.524 2.34c-3.274-10.808-7.52-22.149-12.737-33.78 5.13-11.433 9.306-22.685 12.493-33.401a129.854 129.854 0 0 1 11.915 17.138z" fill="#61DAFB"/><circle cx="128" cy="113.634" r="23.164" fill="#61DAFB"/></svg>
              </div>
              <div class="footer-logo-item" title="Node.js">
                <svg class="logo-icon" viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg"><path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915L129.06 19.165c-1.06-.53-2.385-.53-3.18 0L20.14 80.432c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.325-3.18 3.18-3.18h13.25c1.59 0 3.18 1.325 3.18 3.18v120.845c0 20.936-11.395 33.126-31.27 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346c0-7.95 4.24-15.37 11.13-19.345L116.87 2.784c6.625-3.71 15.636-3.71 22.26 0L244.87 64c6.89 3.975 11.13 11.395 11.13 19.346V205.25c0 7.95-4.24 15.37-11.13 19.345L139.13 285.813c-3.445 1.855-7.42 2.65-11.13 2.65z" fill="#539E43"/><path d="M160.36 205.25c-44.535 0-53.81-20.406-53.81-37.63 0-1.59 1.325-3.18 3.18-3.18h13.515c1.59 0 2.915 1.06 2.915 2.65 2.12 14.045 8.215 20.936 36.04 20.936 22.26 0 31.535-5.035 31.535-16.96 0-6.89-2.65-11.925-37.1-15.37-28.887-2.915-46.58-9.275-46.58-32.33 0-21.2 17.96-33.92 47.905-33.92 33.656 0 50.35 11.66 52.47 36.835 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.325 0-2.65-1.06-2.915-2.385-3.18-14.575-11.395-19.345-32.86-19.345-24.115 0-26.965 8.48-26.965 14.84 0 7.685 3.445 10.07 36.04 14.31 32.33 4.24 47.64 10.335 47.64 33.126-.265 23.055-19.08 36.305-52.47 36.305z" fill="#539E43"/></svg>
              </div>
              <div class="footer-logo-item" title="AWS">
                <svg class="logo-icon" viewBox="0 0 256 153" xmlns="http://www.w3.org/2000/svg"><path d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95 0 .848-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.525.763-2.203.763-.848 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.052-3.984c-.848-1.44-1.695-3.052-2.627-5.002-6.612 7.798-14.92 11.698-24.922 11.698-7.12 0-12.8-2.035-16.953-6.103-4.152-4.07-6.272-9.495-6.272-16.276 0-7.205 2.543-13.054 7.714-17.462 5.17-4.406 12.037-6.612 20.768-6.612 2.882 0 5.849.254 8.985.678 3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.442-1.356-10.935-3.984-13.562-2.712-2.628-7.29-3.9-13.816-3.9-2.967 0-6.018.34-9.155 1.103-3.136.762-6.188 1.695-9.155 2.882-.932.424-1.695.678-2.203.848a3.792 3.792 0 0 1-1.102.17c-.933 0-1.44-.679-1.44-2.12V11.07c0-1.103.17-1.95.593-2.459.424-.508 1.187-1.017 2.374-1.525 2.967-1.525 6.527-2.798 10.68-3.815C33.908 2.254 38.4 1.83 43.144 1.83c10.002 0 17.292 2.289 21.952 6.781 4.576 4.493 6.866 11.359 6.866 20.6v27.126l.424-.001zm-34.417 12.883c2.797 0 5.68-.508 8.732-1.525 3.052-1.017 5.764-2.882 8.054-5.425 1.356-1.61 2.373-3.39 2.882-5.425.508-2.035.848-4.492.848-7.375v-3.56a70.791 70.791 0 0 0-7.799-1.44 63.874 63.874 0 0 0-7.968-.508c-5.68 0-9.834 1.102-12.63 3.39-2.799 2.29-4.153 5.51-4.153 9.749 0 3.899 1.017 6.781 3.137 8.731 2.034 2.035 5.002 2.967 8.897 2.967v-.579zm68.07 9.155c-1.187 0-2.035-.17-2.627-.593-.594-.339-1.103-1.187-1.525-2.374L83.497 6.583c-.424-1.271-.678-2.12-.678-2.627 0-1.017.508-1.61 1.525-1.61h8.308c1.272 0 2.12.17 2.628.593.593.339 1.017 1.187 1.44 2.374l13.393 52.78L122.9 5.313c.339-1.271.763-2.12 1.44-2.374.678-.508 1.61-.593 2.796-.593h6.782c1.271 0 2.12.17 2.797.593.593.339 1.102 1.187 1.44 2.374L151.1 55.947 164.83 5.313c.424-1.271.933-2.12 1.441-2.374.678-.508 1.44-.593 2.627-.593h7.884c1.017 0 1.61.508 1.61 1.61 0 .339-.085.678-.17 1.102a10.913 10.913 0 0 1-.508 1.61l-20.262 67.7c-.423 1.272-.932 2.12-1.524 2.374-.594.424-1.44.593-2.628.593h-7.29c-1.272 0-2.12-.17-2.798-.593-.593-.424-1.102-1.187-1.44-2.458l-12.884-47.608-12.8 47.523c-.338 1.272-.762 2.12-1.44 2.458-.677.424-1.609.593-2.796.593h-7.29l-.085.085zm108.927 2.289c-4.408 0-8.816-.508-13.054-1.525-4.237-1.017-7.544-2.12-9.749-3.39-1.355-.763-2.288-1.61-2.627-2.374a5.91 5.91 0 0 1-.508-2.374V65.86c0-1.44.593-2.12 1.695-2.12.424 0 .848.085 1.271.254.424.17 1.103.508 1.865.933a40.254 40.254 0 0 0 8.223 3.814c3.137 1.017 6.103 1.525 9.155 1.525 4.832 0 8.562-1.017 11.19-2.967 2.627-1.95 4.067-4.831 4.067-8.477 0-2.458-.762-4.577-2.373-6.357-1.61-1.78-4.662-3.39-9.07-4.916l-13.054-4.068c-6.527-2.12-11.359-5.256-14.326-9.41-2.966-4.068-4.492-8.646-4.492-13.562 0-3.9.848-7.375 2.542-10.427 1.695-3.052 3.9-5.68 6.697-7.798 2.797-2.203 5.934-3.815 9.579-4.917 3.645-1.102 7.459-1.525 11.443-1.525 2.035 0 4.152.085 6.188.339 2.12.254 4.068.593 5.934 1.017a42.292 42.292 0 0 1 5.51 1.78c1.78.678 3.136 1.356 4.068 2.034.933.593 1.61 1.187 1.95 1.865.338.593.507 1.44.507 2.458v3.645c0 1.44-.593 2.203-1.695 2.203-.593 0-1.525-.254-2.712-.848-3.984-1.865-8.478-2.797-13.478-2.797-4.408 0-7.884.763-10.342 2.373-2.458 1.61-3.73 4.068-3.73 7.544 0 2.459.848 4.577 2.543 6.273 1.695 1.695 4.916 3.39 9.579 4.916l12.8 4.068c6.442 2.12 11.105 5.086 13.901 8.9 2.797 3.815 4.153 8.139 4.153 12.969 0 3.984-.763 7.63-2.373 10.85a27.062 27.062 0 0 1-6.697 8.393c-2.882 2.373-6.357 4.153-10.426 5.34-4.323 1.356-8.816 1.95-13.647 1.95z" fill="#252F3E"/><path d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534-48.827 0-92.821-18.056-126.05-48.064-2.628-2.373-.255-5.594 2.881-3.73 35.942 20.854 80.276 33.483 126.135 33.483 30.94 0 64.932-6.442 96.212-19.666 4.662-2.12 8.646 3.052 4.069 6.443z" fill="#FF9900"/><path d="M242.317 107.94c-3.56-4.577-23.566-2.203-32.636-1.102-2.712.339-3.136-2.034-.678-3.814 15.938-11.19 42.13-7.968 45.181-4.238 3.052 3.815-.848 30.008-15.768 42.554-2.288 1.95-4.492.933-3.475-1.61 3.39-8.393 10.935-27.296 7.375-31.79z" fill="#FF9900"/></svg>
              </div>
              <div class="footer-logo-item" title="Docker">
                <svg class="logo-icon" viewBox="0 0 256 185" xmlns="http://www.w3.org/2000/svg"><path d="M250.716 70.497c-5.03-3.346-16.628-4.542-25.558-2.842-1.165-8.4-5.907-15.707-14.532-22.3l-4.952-3.333-3.349 4.942c-4.282 6.494-6.543 15.516-5.828 24.26.328 3.065 1.379 8.554 4.484 13.36-3.14 1.71-9.354 4.04-17.555 3.887H.55l-.398 1.881C-1.527 99.84.684 121.055 11.33 138.196c8.208 13.219 20.84 22.4 37.515 27.28 18.79 5.482 49.69 8.62 85.472-7.712 26.08-11.92 46.547-29.968 60.84-53.636 19.901.117 39.562-4.8 46.264-32.368 .045-.085 2.992-8.79 -.705-11.263z" fill="#2496ED"/><path d="M27.29 91.36H53.48c1.22 0 2.21-.99 2.21-2.21V65.4c0-1.22-.99-2.21-2.21-2.21H27.29c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21m29.52 0H83c1.22 0 2.21-.99 2.21-2.21V65.4c0-1.22-.99-2.21-2.21-2.21H56.81c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21m30.02 0h26.19c1.22 0 2.21-.99 2.21-2.21V65.4c0-1.22-.99-2.21-2.21-2.21H86.83c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21m29.82 0h26.19c1.22 0 2.21-.99 2.21-2.21V65.4c0-1.22-.99-2.21-2.21-2.21h-26.19c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21M56.81 62.18H83c1.22 0 2.21-.99 2.21-2.21V36.22c0-1.22-.99-2.21-2.21-2.21H56.81c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21m30.02 0h26.19c1.22 0 2.21-.99 2.21-2.21V36.22c0-1.22-.99-2.21-2.21-2.21H86.83c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21m29.82 0h26.19c1.22 0 2.21-.99 2.21-2.21V36.22c0-1.22-.99-2.21-2.21-2.21h-26.19c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21m0-29.18h26.19c1.22 0 2.21-.99 2.21-2.21V7.04c0-1.22-.99-2.21-2.21-2.21h-26.19c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21m29.73 58.36h26.19c1.22 0 2.21-.99 2.21-2.21V65.4c0-1.22-.99-2.21-2.21-2.21h-26.19c-1.22 0-2.21.99-2.21 2.21v23.75c0 1.22.99 2.21 2.21 2.21" fill="#2496ED"/></svg>
              </div>
              <div class="footer-logo-item" title="LangChain">
                <svg class="logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="#1C3C3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div class="footer-logo-item" title="Hugging Face">
                <svg class="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#FFD21E"/><path d="M30 60c0 10 8.954 18 20 18s20-8 20-18" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="35" cy="40" r="5" fill="#000"/><circle cx="65" cy="40" r="5" fill="#000"/><path d="M22 35c3-8 10-8 13 0" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M65 35c3-8 10-8 13 0" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>
              </div>
              <div class="footer-logo-item" title="Firebase">
                <svg class="logo-icon" viewBox="0 0 256 351" xmlns="http://www.w3.org/2000/svg"><path d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z" fill="#FFC24A"/><path d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z" fill="#FFA712"/><path d="M0 282.998l.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z" fill="#F4BD62"/><path d="M139.12 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.512.005" fill="#FFA712"/><path opacity=".5" d="M139.12 345.64l113.693-63.26-32.882-202.56c-1.04-6.398-8.888-8.927-13.469-4.34L1.192 282.096l114.416 63.539a24.126 24.126 0 0 0 23.512.005" fill="#FFFFFF"/><path d="M139.12 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.512.005" fill="#FFA712"/></svg>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </main>

    <section id="about" class="about-section">
      <div id="about-background-mount"></div>
      <div class="gradient-dots-bg"></div>
      <div class="about-container">
        <div class="about-header">
          <span class="section-tag">About the Studio</span>
          <h2>About Aarna Labs</h2>
          <p>Aarna Labs is a studio focused on designing and building systems that help businesses operate more efficiently. From simple tools to complex platforms, ideas are turned into real, working solutions.</p>
        </div>
        <div class="about-grid">
          ${aboutGridHTML}
        </div>
      </div>
    </section>

    <section id="services" class="services-section">
      <div id="services-background-mount"></div>
      <div class="about-container">
        <div class="about-header">
          <h2>What We Build</h2>
          <p>Aarna Labs designs and builds systems that help businesses operate, automate, and grow.</p>
        </div>
        <div class="studio-capabilities">
          <div class="cap-row">
            <div class="cap-item">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div class="cap-content">
                <h4>AI Agents</h4>
                <p>Autonomous systems that perform tasks and workflows with minimal human input.</p>
              </div>
            </div>
            <div class="cap-item">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div class="cap-content">
                <h4>AI Automation</h4>
                <p>Systems that remove repetitive work and streamline business processes.</p>
              </div>
            </div>
            <div class="cap-item">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div class="cap-content">
                <h4>AI Chatbots</h4>
                <p>Conversational assistants for customer support, sales, and internal operations.</p>
              </div>
            </div>
          </div>
          <div class="cap-row">
            <div class="cap-item">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div class="cap-content">
                <h4>Software Systems</h4>
                <p>Custom platforms, dashboards, APIs, and internal tools built for real needs.</p>
              </div>
            </div>
            <div class="cap-item">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div class="cap-content">
                <h4>Internal Tools</h4>
                <p>Custom tools designed to simplify operations and improve team efficiency.</p>
              </div>
            </div>
            <div class="cap-item">
              <div class="cap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <div class="cap-content">
                <h4>Design & Interfaces</h4>
                <p>Product interfaces, branding, UI systems, and visual design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="testimonials-section">
      <div class="timeline-glow"></div>
      <div class="testimonials-container">
        <div class="testimonials-header">
          <span class="section-tag">Our Approach</span>
          <h2>How We Work</h2>
          <p>Every project begins with understanding the real problem. From there, systems are designed carefully, built thoughtfully, and delivered with reliability.</p>
        </div>

        <div class="timeline">
          <div class="timeline-item" data-animate>
            <div class="timeline-node"></div>
            <div class="timeline-content">
              <span class="timeline-number">01</span>
              <h3>Clear Thinking</h3>
              <p>Understanding the problem first, before designing the solution.</p>
            </div>
          </div>
          <div class="timeline-item" data-animate>
            <div class="timeline-node"></div>
            <div class="timeline-content">
              <span class="timeline-number">02</span>
              <h3>Practical Solutions</h3>
              <p>Systems designed to simplify work and improve everyday operations.</p>
            </div>
          </div>
          <div class="timeline-item" data-animate>
            <div class="timeline-node"></div>
            <div class="timeline-content">
              <span class="timeline-number">03</span>
              <h3>Reliable Execution</h3>
              <p>Carefully engineered systems that remain stable and scalable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div id="contact-background-mount"></div>
      <div class="contact-container">
        <h2 class="contact-heading">Let's build something real.</h2>
        <p class="contact-description">
          Have an idea, a system to build, or a problem to solve?<br>Let's turn it into something real.
        </p>
        <div class="contact-cta-group">
          <a href="mailto:hello@aarnalabs.ai" class="contact-btn-primary">
            Start a Project →
          </a>
          <a href="https://cal.com/aarnalabs" class="contact-btn-secondary">
            Schedule a Call
          </a>
        </div>
        <p class="contact-response-time">Typically responds within 24 hours</p>
      </div>
    </section>

    <div id="footer-mount"></div>
`;

// Scroll Progress Navigation
const scrollNavHTML = `
  <div class="scroll-progress-nav">
    <div class="scroll-nav-line">
      <div class="scroll-nav-progress"></div>
    </div>
    <div class="scroll-nav-nodes">
      <a href="#home" class="scroll-nav-node" data-section="home" title="Hero">
        <span class="scroll-nav-tooltip">Hero</span>
      </a>
      <a href="#about" class="scroll-nav-node" data-section="about" title="About">
        <span class="scroll-nav-tooltip">About</span>
      </a>
      <a href="#services" class="scroll-nav-node" data-section="services" title="What We Build">
        <span class="scroll-nav-tooltip">What We Build</span>
      </a>
      <a href="#testimonials" class="scroll-nav-node" data-section="testimonials" title="How We Work">
        <span class="scroll-nav-tooltip">How We Work</span>
      </a>
      <a href="#contact" class="scroll-nav-node" data-section="contact" title="Contact">
        <span class="scroll-nav-tooltip">Contact</span>
      </a>
    </div>
  </div>
`;

document.querySelector('#app').insertAdjacentHTML('beforeend', scrollNavHTML);


// 3D Engine Initialization
const canvasContainer = document.getElementById('canvas-container');
if (canvasContainer) {
  const canvasEl = document.createElement('canvas');
  canvasEl.id = 'canvas3d';
  canvasEl.style.width = '100%';
  canvasEl.style.height = '100%';
  canvasEl.style.opacity = '0';
  canvasEl.style.transition = 'opacity 1.5s ease-in-out';
  canvasContainer.appendChild(canvasEl);

  const splineApp = new Application(canvasEl);
  splineApp.load('https://prod.spline.design/PYGdeuNNRTeOHyw1/scene.splinecode')
    .then(() => {
      console.log('Spline scene loaded');
      canvasEl.style.opacity = '1';
    })
    .catch(e => console.error('Error loading Spline scene:', e));
}

// Global header reference
const header = document.querySelector('header');

// Nav Navigation Logic
const navHeader = header;
const pageSections = document.querySelectorAll('section, .hero');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      // Sync active state on both desktop and mobile navs
      document.querySelectorAll('nav a, .mobile-nav-link').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${sectionId}`) a.classList.add('active');
      });
    }
  });
}, { threshold: 0.3 });


pageSections.forEach(s => scrollObserver.observe(s));

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileMenu() {
  const isOpen = mobileNavOverlay.classList.contains('open');
  if (isOpen) {
    mobileNavOverlay.classList.remove('open');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    mobileNavOverlay.classList.add('open');
    mobileMenuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when a nav link is tapped
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNavOverlay.classList.remove('open');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Timeline scroll animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200);
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => timelineObserver.observe(item));

// Scroll Reveal Observer for all sections
const revealElements = document.querySelectorAll('.about-header, .about-card, .services-section .about-header, .cap-row, .testimonials-header, .timeline-item, .contact-container');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// Scroll Progress Navigation functionality
const scrollNavNodes = document.querySelectorAll('.scroll-nav-node');
const scrollNavProgress = document.querySelector('.scroll-nav-progress');
const scrollNavLine = document.querySelector('.scroll-nav-line');

function updateScrollNav() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  // Show nav only after scrolling past hero (first 10%)
  const scrollNav = document.querySelector('.scroll-progress-nav');
  if (scrollNav) {
    if (scrollPercent > 10) {
      scrollNav.classList.add('visible');
    } else {
      scrollNav.classList.remove('visible');
    }
  }
  
  if (scrollNavProgress) {
    scrollNavProgress.style.height = scrollPercent + '%';
  }
  
  // Update active node based on scroll position
  const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
  let currentSection = 'home';
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = sectionId;
      }
    }
  });
  
  scrollNavNodes.forEach(node => {
    node.classList.remove('active');
    if (node.dataset.section === currentSection) {
      node.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateScrollNav);
updateScrollNav();

// Header scroll behavior - add scrolled class when past hero
function updateHeaderScroll() {
  const hero = document.getElementById('home');
  if (hero && header) {
    const heroBottom = hero.offsetHeight;
    if (window.scrollY > heroBottom * 0.3) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

window.addEventListener('scroll', updateHeaderScroll);
updateHeaderScroll();

// Hero visibility observer - hide header when hero not visible
const heroSection = document.getElementById('home');

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
    }
  });
}, { threshold: 0 });

if (heroSection && header) {
  heroObserver.observe(heroSection);
}

// Header cursor-following glow effect
let rafId = null;
let targetX = 50;
let targetY = 50;
let currentX = 50;
let currentY = 50;

function updateGlowPosition(e) {
  if (!header) return;
  
  const rect = header.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  targetX = Math.max(0, Math.min(100, x));
  targetY = Math.max(0, Math.min(100, y));
}

function animateGlow() {
  if (!header) return;
  
  // Smooth interpolation
  currentX += (targetX - currentX) * 0.15;
  currentY += (targetY - currentY) * 0.15;
  
  header.style.setProperty('--mouse-x', currentX + '%');
  header.style.setProperty('--mouse-y', currentY + '%');
  
  rafId = requestAnimationFrame(animateGlow);
}

if (header) {
  header.addEventListener('mouseenter', () => {
    header.classList.add('glow-active');
    if (!rafId) {
      animateGlow();
    }
  });
  
  header.addEventListener('mousemove', updateGlowPosition);
  
  header.addEventListener('mouseleave', () => {
    header.classList.remove('glow-active');
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  });
}

