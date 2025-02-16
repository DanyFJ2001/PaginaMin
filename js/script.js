const images = document.querySelectorAll('.carousel-image img');
const leftButton = document.querySelector('.carousel-btn.left');
const rightButton = document.querySelector('.carousel-btn.right');
let currentIndex = 0;

function updateCarousel(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

leftButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel(currentIndex);
});

rightButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel(currentIndex);
});



