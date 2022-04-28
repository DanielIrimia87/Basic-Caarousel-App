const log = (arg) => console.log(arg);
/* log("index.js: loaded") // shorter version of  console.log  */

const slides = document.querySelectorAll(".carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

const currentSlide = document.getElementById("current-slide");

const autoplayEl = document.querySelector(".autoplay");
let autoplay = "";

autoplayEl.addEventListener("click", function () {
  if (autoplayEl.textContent == "Autoplay") {
    autoplayEl.textContent = "Stop Autoplay";
    autoplay = setInterval(moveToNextSlide, 4000);
  } else {
    autoplayEl.textContent = "Autoplay";
    clearInterval(autoplay);
  }
});

currentSlide.textContent = slidePosition + 1;

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
    changeCurrentSlide();
  } else {
    slidePosition++;
    changeCurrentSlide();
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
    changeCurrentSlide();
  } else {
    slidePosition--;
    changeCurrentSlide();
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function changeCurrentSlide() {
  currentSlide.textContent = slidePosition + 1;
}
