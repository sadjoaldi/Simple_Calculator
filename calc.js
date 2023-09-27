// const firstValue = parseInt(prompt("First value"));
// const operator = parseInt(prompt("operator"));
// const secondValue = parseInt(prompt("Second value"));

// if (operator == "+") {
//   let result = firstValue + secondValue;
//   console.log(result);
// } else {
//   let result = firstValue - secondValue;
//   console.log(result);
// }

//*JS pour faire un menu burger
// var sidenav = document.getElementById("mySidenav");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
// function openNav() {
//   sidenav.classList.add("active");
// }

/* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove("active");
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
