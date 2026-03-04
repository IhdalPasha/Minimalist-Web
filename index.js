const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu-container');
const overlay = document.getElementById('mobile-overlay');

let scrollPosition = 0;

function toggleMenu() {

  const isActive = mobileMenu.classList.contains('active');

  if (!isActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
}

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

