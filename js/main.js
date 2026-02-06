// Mobile menu toggle
const menuBtn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("mobile-menu-close");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
});

menuClose.addEventListener("click", () => {
  menu.style.display = "none";
});
