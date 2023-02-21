const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".m-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
  nav.classList.toggle("show");
});