// document.querySelectorAll('.gallery-item').forEach(item => {
//   item.addEventListener('click', () => {
//     window.location.href = 'gallery.html'; // bu Gallery sahifasiga yo‘naltiradi
//   });
// });
// const gallery = document.getElementById('gallery');
// let currentIndex = 0;
// const totalImages = 30;
// const imagesPerPage = 5;

// // Rasmlarni yaratish funksiyasi
// function showImages() {
//   gallery.innerHTML = '';
//   for (let i = 0; i < imagesPerPage; i++) {
//     let imgNumber = (currentIndex + i) % totalImages + 1;
//     const div = document.createElement('div');
//     div.classList.add('gallery-item');
//     div.innerHTML = `<img src="rasmlar/img${imgNumber}.jpg" alt="Gallery ${imgNumber}">`;
//     div.addEventListener('click', () => {
//       window.location.href = 'gallery.html';
//     });
//     gallery.appendChild(div);
//   }
//   currentIndex = (currentIndex + imagesPerPage) % totalImages;
// }

// // Har 5 soniyada almashsin
// showImages();
// setInterval(showImages, 5000);
