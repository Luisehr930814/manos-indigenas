// Simple slider functionality for the hero section
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.hero-nav .dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize first slide
  showSlide(currentSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  // Auto‑slide every 5 seconds
  setInterval(nextSlide, 5000);
});