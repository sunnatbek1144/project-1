const enterBtn = document.getElementById("enter-btn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");

enterBtn.addEventListener("click", () => {
  intro.style.transition = "opacity 1s ease";
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
    document.body.style.overflow = "auto"; // scrolling ruxsat
  }, 1000);
});
