const carruselInner = document.querySelector('#carrusel_inner');
const carruselItems = document.querySelectorAll('.carrusel_item');
let currentIndex = 0;

document.querySelector('#carrusel_prev').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carruselItems.length - 1;
  }
  carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('#carrusel_next').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carruselItems.length) {
    currentIndex = 0;
  }
  carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});
