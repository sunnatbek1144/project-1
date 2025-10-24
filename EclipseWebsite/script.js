// ==== 10 KATTA RASM CAROUSEL ====
const carouselImages = document.querySelectorAll('.carousel-container img');
let currentIndex = 0;

function showNextImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}
carouselImages[currentIndex].classList.add('active');
setInterval(showNextImage, 3000); // 3 sekundda almashadi

// ==== MODAL ====
const modal = document.getElementById('gameModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', () => {
    const game = card.getAttribute('data-game');
    modalTitle.textContent = game || "O‘yin ma’lumoti";
    modalImg.src = card.querySelector('img').src;
    modalDesc.textContent = "Bu o‘yinga oid batafsil ma’lumot tez orada qo‘shiladi...";
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) modal.style.display = 'none';
});
