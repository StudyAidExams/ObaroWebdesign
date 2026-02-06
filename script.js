// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const close = document.getElementById('mobile-menu-close');

btn.addEventListener('click', () => { menu.style.display = 'flex'; });
close.addEventListener('click', () => { menu.style.display = 'none'; });
