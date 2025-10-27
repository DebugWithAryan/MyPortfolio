// --- Static Data ---
const certifications = [
  {
    title: "Python for Beginner",
    org: "Microsoft",
    date: "21st Oct, 2024",
    file: "assets/certificates/Microsoft.pdf"
  },
  {
    title: "Complete Android 15 Development - Java & Kotlin",
    org: "Udemy",
    date: "20th Mar, 2025",
    file: "assets/certificates/AppDevUdemy.pdf"
  },
  {
    title: "Software Engineering Job Simulation",
    org: "Walmart(Forage)",
    date: "25th Oct, 2024",
    file: "assets/certificates/walmart.pdf"
  },
  {
    title: "ISF App Development",
    org: "Jaypee University of Engineering & Technology",
    date: "3rd Dec, 2024",
    file: "assets/certificates/isf.pdf"
  },
  {
    title: "Goldman Sachs Forage Programs",
    org: "Goldman Sachs (Forage)",
    date: "10th Nov, 2024",
    file: "assets/certificates/Resume.pdf"
  },
  {
    title: "Spring Boot & Spring AI Certification",
    org: "Udemy",
    date: "Mar 2025",
    file: "assets/certificates/Resume.pdf"
  }
];
const skills = {
  languages: [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" }
  ],
  frameworks: [
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Arduino IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Spring AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }
  ],
  databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Room DB", iconClass: "ri-database-2-line" }
  ],
  software: [
    { name: "Agile", iconClass: "ri-lightbulb-flash-line" },
    { name: "SDLC", iconClass: "ri-flow-chart" },
    { name: "CI/CD", iconClass: "ri-server-line" },
    { name: "Unit Testing", iconClass: "ri-bug-line" },
    { name: "Code Review", iconClass: "ri-eye-line" },
    { name: "Version Control", iconClass: "ri-git-branch-line" }
  ]
};
const projects = {
  android: [
    {
      title: "JP Connect App",
      description: "Developed an app that uses web scraping to fetch real-time academic data from the college website, including attendance records, exam marks, CGPA. Implemented attendance percentage prediction based on user simulation of attending or skipping future classes. Integrated Firebase for secure user authentication and cloud data storage. Designed an intuitive Jetpack Compose UI for quick insights and interactive predictions.",
      tech: ["Kotlin", "Web Scraping", "Firebase", "Jetpack Compose"],
      github: "https://github.com/aryanjaiswal/jp-connect-app",
      live: null,
      image: "assets/project-1.jpg"
    },
    {
      title: "ISF Club Management Application",
      description: "Developed a club management app for 100+ members with real-time data updates. Added features like attendance tracking, event dashboard, inventory control. Integrated chat using Firebase Realtime DB. Designed responsive UI using Material Design 3. Implemented secure offline caching and notifications.",
      tech: ["Kotlin", "Firebase", "Jetpack Compose", "MVVM"],
      github: "https://github.com/aryanjaiswal/isf-club-management",
      live: null,
      image: "assets/project-2.jpg"
    },
    {
      title: "Connectify – Professional Networking Platform",
      description: "Built an app supporting team formation and professional networking for 100+ users. Developed real-time post feed with advanced filters and hackathon tracking.",
      tech: ["Kotlin", "Firebase", "OAuth"],
      github: "https://github.com/aryanjaiswal/connectify-app",
      live: null,
      image: "assets/project-3.jpg"
    },
    {
      title: "JUET TimeTable Application",
      description: "Designed an offline-first timetable app used by 1000+ students. Enabled batch/semester-specific filtering and updates. Optimized load time to 2 seconds with minimal battery usage.",
      tech: ["Kotlin", "Firebase", "SQLite"],
      github: "https://github.com/aryanjaiswal/juet-timetable-app",
      live: null,
      image: "assets/project-4.jpg"
    },
    {
      title: "News World App",
      description: "A modern news app using NewsAPI to fetch real-time news articles from multiple categories with search functionality and bookmarking features.",
      tech: ["Kotlin", "Firebase", "Jetpack Compose", "Retrofit", "NewsAPI"],
      github: "https://github.com/aryanjaiswal/news-world-app",
      live: null,
      image: "assets/project-5.jpg"
    }
  ],
  ios: [
    {
      title: "Coming Soon",
      description: "I'm currently learning iOS development with Swift and SwiftUI. My first iOS app will be showcased here soon.",
      tech: ["Swift", "SwiftUI", "iOS"],
      github: null,
      live: null,
      image: "assets/project-6.jpg"
    }
  ],
  backend: [
    {
      title: "E-Commerce REST API",
      description: "A comprehensive e-commerce backend API built with Spring Boot featuring user authentication, product management, order processing, and payment integration.",
      tech: ["Spring Boot", "Spring Security", "MySQL", "REST API"],
      github: "#",
      live: "#",
      image: "assets/project-1.jpg"
    },
    {
      title: "AI-Powered Chat Assistant",
      description: "An intelligent chat assistant API using Spring AI with support for multiple LLM providers, context management, and streaming responses.",
      tech: ["Spring Boot", "Spring AI", "PostgreSQL", "Redis"],
      github: "#",
      live: "#",
      image: "assets/project-2.jpg"
    },
    {
      title: "Microservices Architecture",
      description: "A distributed system architecture using Spring Boot microservices with API Gateway, Service Discovery, and Distributed Tracing.",
      tech: ["Spring Boot", "Spring Cloud", "Docker", "Kubernetes"],
      github: "#",
      live: "#",
      image: "assets/project-3.jpg"
    }
  ]
};

// --- Render Functions ---
function renderCertifications() {
  const certContainer = document.querySelector('.card-grid.certifications');
  if (!certContainer) return;
  certContainer.innerHTML = certifications.map((cert, index) => `
    <button class="edu-card glassmorph cert-card" data-cert-index="${index}" ${!cert.file ? 'disabled' : ''} aria-label="${cert.title}">
      <h3>${cert.title}</h3>
      <h4>${cert.org}</h4>
      <p class="edu-date">${cert.date}</p>
      ${!cert.file ? `<span style="color: var(--text-muted); font-size: 0.95rem;">Coming soon</span>` : ''}
    </button>
  `).join('');

  // Bind click listeners to certificate cards
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', onCertificateCardClick);
  });
}

// Certificate modal logic
let selectedCertificateFile = null;

function onCertificateCardClick(e) {
  const index = e.currentTarget.getAttribute('data-cert-index');
  const cert = certifications[Number(index)];
  if (!cert || !cert.file) return;
  selectedCertificateFile = cert.file;
  showCertificateChoiceModal(cert.title);
}

function showCertificateChoiceModal(title) {
  const modal = document.getElementById('certificate-modal');
  const titleEl = document.getElementById('certificate-modal-title');
  const msgEl = document.getElementById('certificate-modal-message');
  titleEl.textContent = `Certificate: ${title}`;
  msgEl.textContent = 'How would you like to proceed?';
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function setupCertificateModalHandlers() {
  const modal = document.getElementById('certificate-modal');
  const seeBtn = document.getElementById('certificate-see-btn');
  const downloadBtn = document.getElementById('certificate-download-btn');
  const closeBtn = document.getElementById('certificate-close');

  // Close when clicking overlay background
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideCertificateModal();
  });
  // Close button
  closeBtn.addEventListener('click', hideCertificateModal);
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) hideCertificateModal();
  });

  // See: open in new tab
  seeBtn.addEventListener('click', () => {
    if (selectedCertificateFile) {
      window.open(selectedCertificateFile, '_blank', 'noopener');
    }
    hideCertificateModal();
  });

  // Download: force download in a new tab
  downloadBtn.addEventListener('click', () => {
    if (!selectedCertificateFile) return;
    const anchor = document.createElement('a');
    anchor.href = selectedCertificateFile;
    anchor.download = '';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    hideCertificateModal();
  });
}
function renderSkills() {
  const skillsContainer = document.querySelector('.skills-list');
  if (!skillsContainer) return;
  skillsContainer.innerHTML = `
    <div class="skills-card-grid">
      <div class="skills-card">
        <div class="skills-card-icon"><i class="ri-code-s-slash-line"></i></div>
        <h4>Programming Languages</h4>
        <div class="icon-chip-group">
          ${skills.languages.map(lang => `
            <div class="icon-chip">
              <img src="${lang.icon}" alt="${lang.name}" class="icon-chip-img"/>
              <span>${lang.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="skills-card">
        <div class="skills-card-icon"><i class="ri-briefcase-4-line"></i></div>
        <h4>Frameworks & Tools</h4>
        <div class="icon-chip-group">
          ${skills.frameworks.map(fw => `
            <div class="icon-chip">
              <img src="${fw.icon}" alt="${fw.name}" class="icon-chip-img"/>
              <span>${fw.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="skills-card">
        <div class="skills-card-icon"><i class="ri-database-2-line"></i></div>
        <h4>Database</h4>
        <div class="icon-chip-group">
          ${skills.databases.map(db => `
            <div class="icon-chip">
              ${db.icon ? `<img src="${db.icon}" alt="${db.name}" class="icon-chip-img"/>` : `<i class="${db.iconClass} icon-chip-img" style="font-size:2.2rem;color:#6a8cff"></i>`}
              <span>${db.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="skills-card">
        <div class="skills-card-icon"><i class="ri-tools-line"></i></div>
        <h4>Software Engineering</h4>
        <div class="icon-chip-group">
          ${skills.software.map(sw => `
            <div class="icon-chip">
              <i class="${sw.iconClass} icon-chip-img" style="font-size:2.2rem;color:#6a8cff"></i>
              <span>${sw.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
function renderProjects() {
  // Setup category card click handlers
  setupCategoryCards();
  
  // Update project counts
  updateProjectCounts();
}

function setupCategoryCards() {
  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      openProjectsModal(category);
    });
  });
}

function updateProjectCounts() {
  const androidCount = projects.android.length;
  const iosCount = projects.ios.length;
  const backendCount = projects.backend.length;
  
  const androidEl = document.getElementById('android-count');
  const iosEl = document.getElementById('ios-count');
  const backendEl = document.getElementById('backend-count');
  
  if (androidEl) androidEl.textContent = `${androidCount} ${androidCount === 1 ? 'project' : 'projects'}`;
  if (iosEl) iosEl.textContent = iosCount > 0 ? `${iosCount} ${iosCount === 1 ? 'project' : 'projects'}` : 'Coming Soon';
  if (backendEl) backendEl.textContent = backendCount > 0 ? `${backendCount} ${backendCount === 1 ? 'project' : 'projects'}` : 'Coming Soon';
}

function openProjectsModal(category) {
  const modal = document.getElementById('projects-modal');
  const content = document.getElementById('projects-modal-content');
  const titleEl = document.getElementById('projects-modal-title');
  const iconEl = document.getElementById('modal-category-icon');
  const bodyEl = document.getElementById('projects-modal-body');
  
  if (!modal || !content) return;
  
  // Set title and icon based on category
  const categoryInfo = {
    android: { title: 'Android Projects', icon: 'ri-android-fill' },
    ios: { title: 'iOS Projects', icon: 'ri-apple-fill' },
    backend: { title: 'Backend Projects', icon: 'ri-server-line' }
  };
  
  const info = categoryInfo[category] || { title: 'Projects', icon: 'ri-code-s-slash-line' };
  titleEl.textContent = info.title;
  iconEl.className = info.icon;
  
  // Render projects for this category
  const categoryProjects = projects[category] || [];
  bodyEl.innerHTML = renderProjectsList(categoryProjects);
  
  // Show modal with slide-in animation
  modal.classList.add('show');
  document.body.classList.add('modal-open');
  
  // Add event listeners for project links
  addProjectLinksListeners();
}

function renderProjectsList(projectList) {
  if (!projectList || projectList.length === 0) {
    return '<div class="no-projects">No projects available yet.</div>';
  }
  
  return `
    <div class="projects-list">
      ${projectList.map(p => `
        <div class="modal-project-card">
          <div class="modal-project-image">
            <img src="${p.image}" alt="${p.title}" />
          </div>
          <div class="modal-project-content">
            <h4>${p.title}</h4>
            <p>${p.description}</p>
            <div class="modal-project-tech">
              ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="modal-project-links">
              ${p.github && p.github !== '#' ? `<a href="${p.github}" target="_blank" class="btn-outline btn-sm">
                <i class="ri-github-fill"></i> GitHub
              </a>` : `<button class="btn-outline btn-sm" disabled>
                <i class="ri-time-line"></i> Coming Soon
              </button>`}
              ${p.live && p.live !== '#' ? `<a href="${p.live}" target="_blank" class="btn-primary btn-sm">
                <i class="ri-external-link-line"></i> Live Demo
              </a>` : `<button class="btn-primary btn-sm" disabled>
                <i class="ri-time-line"></i> Not Available
              </button>`}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function addProjectLinksListeners() {
  // Any additional listeners can be added here
}

function closeProjectsModal() {
  const modal = document.getElementById('projects-modal');
  if (modal) {
    const content = document.getElementById('projects-modal-content');
    content.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
      content.style.transform = '';
    }, 400);
  }
}

// Carousel functionality
let currentSlide = 0;
let slidesPerView = 4; // Default for large screens

function initializeCarousel() {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const dotsContainer = document.getElementById('carousel-dots');
  
  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;
  
  // Calculate slides per view based on screen size
  function updateSlidesPerView() {
    const width = window.innerWidth;
    if (width > 900) {
      slidesPerView = 3; // Large screens: maximum 3 projects
    } else if (width > 600) {
      slidesPerView = 2; // Medium screens: 2 projects
    } else {
      slidesPerView = 1; // Small screens: 1 project
    }
  }
  
  // Initialize slides per view
  updateSlidesPerView();
  
  // Create dots
  const totalSlides = Math.ceil(projects.length / slidesPerView);
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('data-slide', i);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  
  // Update navigation buttons
  function updateNavigation() {
    const totalSlides = Math.ceil(projects.length / slidesPerView);
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide >= totalSlides - 1;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  
  // Go to specific slide
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    // Calculate the exact pixel offset for smooth sliding
    const cardWidth = track.querySelector('.project-card').offsetWidth;
    const gap = 16; // 1rem gap between cards
    const slideWidth = (cardWidth + gap) * slidesPerView;
    const translateX = -(currentSlide * slideWidth);
    track.style.transform = `translateX(${translateX}px)`;
    updateNavigation();
  }
  
  // Event listeners
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    const totalSlides = Math.ceil(projects.length / slidesPerView);
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    const oldSlidesPerView = slidesPerView;
    updateSlidesPerView();
    
    if (oldSlidesPerView !== slidesPerView) {
      // Recalculate current slide
      const totalSlides = Math.ceil(projects.length / slidesPerView);
      if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1;
      }
      
      // Recreate dots
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
      
      // Force a small delay to ensure DOM is updated
      setTimeout(() => {
        goToSlide(currentSlide);
      }, 10);
    }
  });
  
  // Touch/swipe support for mobile
  let startX = 0;
  let endX = 0;
  
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next slide
        const totalSlides = Math.ceil(projects.length / slidesPerView);
        if (currentSlide < totalSlides - 1) {
          goToSlide(currentSlide + 1);
        }
      } else {
        // Swipe right - previous slide
        if (currentSlide > 0) {
          goToSlide(currentSlide - 1);
        }
      }
    }
  });
  
  // Initialize first slide
  goToSlide(0);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCertifications();
  renderSkills();
  renderProjects();
  setupCertificateModalHandlers();
  setupProjectsModalHandlers();
});

function setupProjectsModalHandlers() {
  const modal = document.getElementById('projects-modal');
  const closeBtn = document.getElementById('projects-close');
  const content = document.getElementById('projects-modal-content');
  
  if (!modal || !closeBtn || !content) return;
  
  // Close button
  closeBtn.addEventListener('click', () => {
    closeProjectsModal();
  });
  
  // Close when clicking overlay background
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectsModal();
    }
  });
  
  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeProjectsModal();
    }
  });
}

// Typewriter effect for hero subtitle
const typewriterTitleElement = document.getElementById('typewriter-title');
const typewriterElement = document.getElementById('typewriter');
const cursor = document.getElementById('typewriter-cursor');
const titleText = "Hi, I'm Aryan Jaiswal";
const roles = ["Software Engineer", "Android Developer", "iOS Developer", "Backend Developer"];
let titleCharIndex = 0;
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function moveCursorTo(element) {
  if (!element || !cursor) return;
  element.parentNode.insertBefore(cursor, element.nextSibling);
}

function typeTitle() {
  if (!typewriterTitleElement) return;
  moveCursorTo(typewriterTitleElement);
  if (titleCharIndex < titleText.length) {
    typewriterTitleElement.textContent += titleText.charAt(titleCharIndex);
    titleCharIndex++;
    setTimeout(typeTitle, 70);
  } else {
    setTimeout(() => {
      typeRole();
    }, 600);
  }
}

function typeRole() {
  if (!typewriterElement) return;
  moveCursorTo(typewriterElement);
  const currentRole = roles[roleIndex];
  if (typing) {
    if (charIndex < currentRole.length) {
      typewriterElement.textContent += currentRole.charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 80);
    } else {
      typing = false;
      setTimeout(typeRole, 1200); // Pause before erasing
    }
  } else {
    if (charIndex > 0) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeRole, 40);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 400); // Pause before typing next role
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typewriterTitleElement) {
    typewriterTitleElement.textContent = "";
    typeTitle();
  }
});

// --- Existing JS below ---
// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
if (window.ScrollReveal) {
  ScrollReveal().reveal('.hero-title, .hero-subtitle, .hero-desc, .hero-actions', {
    distance: '40px', origin: 'bottom', duration: 900, interval: 200, opacity: 0, reset: false
  });
  ScrollReveal().reveal('.hero-img img, #hero-3d-canvas', { distance: '40px', origin: 'right', duration: 1000, opacity: 0 });
  ScrollReveal().reveal('.about-img img', { distance: '40px', origin: 'left', duration: 1000, opacity: 0 });
  ScrollReveal().reveal('.about-text h2, .about-text p, .about-list li', { distance: '40px', origin: 'bottom', duration: 900, interval: 150, opacity: 0 });
  ScrollReveal().reveal('.exp-card, .edu-card, .project-card', { distance: '40px', origin: 'bottom', duration: 900, interval: 200, opacity: 0 });
  ScrollReveal().reveal('.contact-content h2, .contact-content p, .contact-form, .contact-socials a', { distance: '40px', origin: 'bottom', duration: 900, interval: 150, opacity: 0 });
}
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! (Demo only)');
  this.reset();
});
// Three.js 3D Model in Hero
if (window.THREE) {
  const canvas = document.getElementById('hero-3d-canvas');
  if (canvas) {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0); // transparent
    renderer.setSize(320, 320);
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.5;
    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    const point = new THREE.PointLight(0x00ffe7, 1.2, 100);
    point.position.set(5, 5, 5);
    scene.add(point);
    // Sphere geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 0.7,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x00ffe7,
      emissiveIntensity: 0.25,
      sheen: 1.0,
      sheenColor: 0x00ffe7,
      reflectivity: 1.0,
      transmission: 0.1,
      thickness: 0.5
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.008;
      sphere.rotation.x += 0.003;
      renderer.render(scene, camera);
    }
    animate();
    // Responsive resize
    window.addEventListener('resize', () => {
      const size = Math.min(320, window.innerWidth - 40);
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    });
  }
}

// Loader animation: hide after 1.8s, then animate hero in
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('page-loader').classList.add('hide');
    // Optional: animate hero section in
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.opacity = 0;
      hero.style.transform = 'scale(0.98)';
      setTimeout(() => {
        hero.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
        hero.style.opacity = 1;
        hero.style.transform = 'scale(1)';
      }, 100);
    }
  }, 1800);
});

// Technical skill icons for loader
const loaderIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
];
let loaderIconIndex = 0;
const loaderIconImg = document.getElementById('loader-icon-img');

function cycleLoaderIcons() {
  if (!loaderIconImg) return;
  loaderIconImg.style.opacity = 0;
  setTimeout(() => {
    loaderIconImg.src = loaderIcons[loaderIconIndex];
    loaderIconImg.style.opacity = 1;
    loaderIconIndex = (loaderIconIndex + 1) % loaderIcons.length;
  }, 300);
  setTimeout(cycleLoaderIcons, 900);
}
if (loaderIconImg) {
  // Start with a random language icon among Java/Kotlin/Python
  loaderIconIndex = Math.floor(Math.random() * 3);
  loaderIconImg.src = loaderIcons[loaderIconIndex];
  // Advance so the next cycle shows a different icon
  loaderIconIndex = (loaderIconIndex + 1) % loaderIcons.length;
  setTimeout(cycleLoaderIcons, 900);
}

// Coming Soon Modal Functionality
function addComingSoonListeners() {
  // Add event listeners for Live Demo and Github links
  const liveDemoLinks = document.querySelectorAll('.live-demo-link');
  const githubLinks = document.querySelectorAll('.github-link');
  
  liveDemoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showComingSoonModal('Live Demo');
    });
  });
  
  githubLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showComingSoonModal('Github Repository');
    });
  });
}

function showComingSoonModal(featureType) {
  const modal = document.getElementById('coming-soon-modal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalMessage = modal.querySelector('.modal-message');
  
  // Update modal content based on feature type
  modalTitle.textContent = `${featureType} - Coming Soon!`;
  modalMessage.textContent = `The ${featureType.toLowerCase()} feature is currently under development. Stay tuned for updates!`;
  
  // Show modal
  modal.classList.add('show');
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

function hideComingSoonModal() {
  const modal = document.getElementById('coming-soon-modal');
  modal.classList.remove('show');
  
  // Restore body scroll
  document.body.style.overflow = '';
}

// Modal event listeners
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('coming-soon-modal');
  const closeBtn = document.getElementById('modal-close');
  
  // Close modal when close button is clicked
  closeBtn.addEventListener('click', hideComingSoonModal);
  
  // Close modal when clicking outside the modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideComingSoonModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      hideComingSoonModal();
    }
  });
});