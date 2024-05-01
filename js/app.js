let slideIndex = 1;
changeSlides();

function addSlide(x) {
  slideIndex += x;
  changeSlides();
}

function deductSlide(x) {
  slideIndex -= x;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  changeSlides();
}

function changeSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("circle");
  let plus = document.getElementsByClassName("plus")[0];
  let minus = document.getElementsByClassName("minus")[0];
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (slideIndex === slides.length) {
    plus.style.display = "none";
  } else {
    plus.style.display = "block";
  }
  if (slides.length <= 1) {
    minus.style.display = "none";
  } else {
    minus.style.display = "block";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
