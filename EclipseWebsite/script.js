// Trend slider
let slides = document.querySelectorAll('.trend-slide');
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 3000);

// Game modal data
const gameData = {
  "Apex Legends": {
    description: "Battle royale o'yini, Legends bilan o'ynang...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/0/01/Apex_legends_cover.jpg"
    ]
  },
  "Call of Duty: Warzone": {
    description: "Battle royale FPS o'yini, katta xaritada omon qoling...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Call_of_Duty_Warzone.jpg"
    ]
  },
  "Valorant": {
    description: "Taktik FPS, agentlar bilan raqiblarni yo'q qiling...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Valorant_cover.jpg"
    ]
  },
  "Dota 2": {
    description: "MOBA o'yini, 5 vs 5 strategik janglar...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/0/0a/Dota_2_cover.jpg"
    ]
  },
  "Counter-Strike 2": {
    description: "Taktik FPS, terrorchilar va kontr-terrorchilar...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Counter_Strike_2_cover.jpg"
    ]
  },
  "Counter-Strike": {
    description: "Klassik taktika FPS...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Counter-Strike.jpg"
    ]
  },
  "World of Tanks": {
    description: "MMO tank o'yini, turli tanklar bilan janglar...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/5/5e/World_of_Tanks_cover.jpg"
    ]
  },
  "World of Warships": {
    description: "MMO kemalar jang o'yini...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/0/0b/World_of_Warships_cover.jpg"
    ]
  },
  "Atomic Heart": {
    description: "FPS o'yini, Sovet Ittifoqida paranormal hodisalar...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/2/28/Atomic_Heart_cover.jpg"
    ]
  },
  "Blur": {
    description: "Avtomobil poygasi o'yini, kuchli qurollar bilan...",
    images: [
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Blur_cover.jpg"
    ]
  }
}

// Modal functionality
const modal = document.querySelector('.game-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImages = document.getElementById('modal-images');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', () => {
    const game = card.getAttribute('data-game');
    modalTitle.textContent = game;
    modalDescription.textContent = gameData[game].description;
    modalImages.innerHTML = '';
    gameData[game].images.forEach(img => {
      const image = document.createElement('img');
      image.src = img;
      modalImages.appendChild(image);
    });
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target == modal) modal.style.display = 'none';
});
