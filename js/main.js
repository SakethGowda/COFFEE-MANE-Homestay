const toggleBtn = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".menu-overlay");

toggleBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});
