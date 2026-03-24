'use strict';

// ── Mobile menu toggle ────────────────────────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu   = document.getElementById('icon-menu');
const iconClose  = document.getElementById('icon-close');

menuToggle.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  iconMenu.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
});

// Close mobile menu when any link inside it is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  });
});

// ── Active nav link highlight on scroll ───────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('text-accent', 'text-white'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('text-accent');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// ── Navbar shadow on scroll ───────────────────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('shadow-lg', window.scrollY > 50);
}, { passive: true });
