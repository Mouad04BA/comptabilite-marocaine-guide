
// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-menu a');
if (navLinks.length > 0 && navMenu) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme on load
if (savedTheme === 'dark') {
  htmlElement.classList.add('dark-theme');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-theme');
    
    // Save theme preference
    const currentTheme = htmlElement.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
}

// Set current year in footer
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Tab functionality
function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  if (tabs.length === 0) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      
      // Remove active class from all tabs and contents
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to current tab and content
      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Accordion functionality
function setupAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  if (accordionHeaders.length === 0) return;
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.classList.toggle('active');
      
      const icon = header.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
      }
    });
  });
}

// Run setup functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupAccordions();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
