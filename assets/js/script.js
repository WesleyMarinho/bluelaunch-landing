// Navigation toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
}

// Smooth scrolling for same-page links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  if (id.length > 1) {
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    }
  }
});

// Newsletter basic validation
const form = document.querySelector('.newsletter');
if (form) {
  form.addEventListener('submit', (e) => {
    const email = form.querySelector('input[type="email"]');
    if (!email || !email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      e.preventDefault();
      email?.setCustomValidity('Please enter a valid email address');
      email?.reportValidity();
      setTimeout(() => email?.setCustomValidity(''), 2000);
    }
  });
}

// Current year in footer
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

