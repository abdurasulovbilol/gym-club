let currentIndex = 0;

function changeSlide(offset) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  currentIndex = (currentIndex + offset + totalSlides) % totalSlides;

  const translateValue = -currentIndex * 100 + "%";
  slides.style.transform = "translateX(" + translateValue + ")";
}
