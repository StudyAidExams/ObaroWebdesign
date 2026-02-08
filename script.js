const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
let index = 0;

document.querySelector(".next").onclick = () => {
  index = (index + 1) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
};
