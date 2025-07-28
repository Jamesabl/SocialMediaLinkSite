// Optional JavaScript placeholder if you want future interactivity
console.log("Jake's Social Page Loaded");


const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000); // change image every 3 seconds
