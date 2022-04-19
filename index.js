const log = (arg) => console.log(arg);
/* log("index.js: loaded") // shorter version of  console.log  */

const slides = document.getElementsByClassName("carousel-item");

let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = totalSlides - 2;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}