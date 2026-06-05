// ========== Typing Effect ==========
const words = ['Web Apps', 'APIs', 'UI/UX', 'Dashboards', 'Solutions'];
const dynamicText = document.getElementById('dynamicText');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    dynamicText.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
    setTimeout(typeEffect, 100);
  } else {
    dynamicText.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
      return;
    }
    setTimeout(typeEffect, 60);
  }
}

typeEffect();

// ========== Theme Toggle ==========
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  icon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    icon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  }
});

// ========== Mobile Menu ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ========== Active Nav Link ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = 'hero';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ========== Scroll Reveal ==========
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== Animated Counters ==========
const statNumbers = document.querySelectorAll('.stat-number');
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  const aboutSection = document.getElementById('about');
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    countersAnimated = true;
    statNumbers.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 40;
      let current = 0;
      const update = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + '+';
        }
      };
      update();
    });
  }
}

window.addEventListener('scroll', animateCounters);

// ========== Skill Bars Animation ==========
const skillItems = document.querySelectorAll('.skill-item');
let skillBarsAnimated = false;

function animateSkillBars() {
  if (skillBarsAnimated) return;
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    skillBarsAnimated = true;
    skillItems.forEach(item => {
      const level = item.getAttribute('data-level');
      const fill = item.querySelector('.skill-fill');
      fill.style.width = level + '%';
    });
  }
}

window.addEventListener('scroll', animateSkillBars);

// ========== Project Filter ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ========== Testimonials Slider ==========
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.testimonial-dot');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentTestimonial = index;
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    showTestimonial(index);
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 5000);
  });
});

function nextTestimonial() {
  showTestimonial((currentTestimonial + 1) % testimonialCards.length);
}

showTestimonial(0);
testimonialInterval = setInterval(nextTestimonial, 5000);

// ========== Back to Top ==========
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Contact Form ==========
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    const notification = document.createElement('div');
    notification.className = 'form-notification success';
    notification.textContent = 'Thanks! Your message has been sent successfully.';
    contactForm.appendChild(notification);
    btn.innerHTML = '<span>Sent!</span> <i class="fas fa-check"></i>';
    btn.disabled = false;
    contactForm.reset();
    setTimeout(() => notification.remove(), 4000);
  }, 1500);
});

// ========== Resize handler for reveal ==========
window.addEventListener('resize', revealOnScroll);
