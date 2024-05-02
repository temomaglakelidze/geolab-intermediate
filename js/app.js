let slideIndex = 1;
changeSlides();

function addSlide(x) {
  slideIndex += x;
  changeSlides();
}

function deductSlide(x) {
  slideIndex -= x;
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
    plus.classList.add("finish");
  } else {
    plus.classList.remove("finish");
  }
  if (slideIndex === 1) {
    minus.classList.add("finish");
  } else {
    minus.classList.remove("finish");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  if (slideIndex === slides.length) {
    return;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("zoom");
  }
  setTimeout(function () {
    addSlide(1);
  }, 5000);
}
