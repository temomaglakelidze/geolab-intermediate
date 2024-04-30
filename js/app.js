let slideIndex = 1;
changeSlides();

function addSlide(x) {
  slideIndex += x;
  changeSlides();
}

function deductSlide(x) {
  slideIndex = x;
  changeSlides();
}

function changeSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("circle");
  let arrow = document.getElementsByClassName("arrow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
