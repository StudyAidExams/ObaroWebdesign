// Mobile navigation toggle
const mobileBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
mobileBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
