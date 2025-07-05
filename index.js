// Language & Currency Changing
const langBtn = document.getElementById("language");
const currencyBtn = document.getElementById("currency");
const langMenu = document.getElementById("langMenu");
const currencyMenu = document.getElementById("currencyMenu");
const langText = document.getElementById("langText");
const currencyText = document.getElementById("currencyText");

langBtn.addEventListener("click", () => {
  if (langBtn) {
    langMenu.classList.toggle("hidden");
    currencyMenu.classList.add("hidden");
  }
});

currencyBtn.addEventListener("click", () => {
  if (currencyBtn) {
    currencyMenu.classList.toggle("hidden");
    langMenu.classList.add("hidden");
  }
});

function languageChange(lang) {
  langText.textContent = lang;
  langMenu.classList.add("hidden");
}

function currencyChange(money) {
  currencyText.textContent = money;
  currencyMenu.classList.add("hidden");
}

// Mobile Menu Toggle
const mobileBtn = document.getElementById("mobileNavBtn");
const sideBar = document.getElementById("sideBar");
const closeBtn = document.getElementById("closeBtn");

mobileBtn.addEventListener("click", () => {
  sideBar.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  sideBar.style.visibility = "hidden";
});

// Document Event Handler
document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !currencyBtn.contains(e.target)) {
    langMenu.classList.add("hidden");
    currencyMenu.classList.add("hidden");
  }
});

// Slider
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollPosition = 0;

function getCardWidth() {
  const card = carousel.querySelector(".card");
  const gap = 20;
  return card.offsetWidth + gap;
}

function getMaxScroll() {
  return carousel.scrollWidth - carousel.offsetWidth;
}

function updateButtons() {
  const maxScroll = getMaxScroll();
  prevBtn.disabled = scrollPosition <= 0;
  nextBtn.disabled = scrollPosition >= maxScroll - 1; 
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
  updateButtons();
}

prevBtn.addEventListener("click", () => {
  const cardWidth = getCardWidth();
  scrollPosition = Math.max(0, scrollPosition - cardWidth);
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  const cardWidth = getCardWidth();
  const maxScroll = getMaxScroll();
  scrollPosition = Math.min(maxScroll, scrollPosition + cardWidth);
  updateCarousel();
});

window.addEventListener("resize", () => {
  scrollPosition = 0;
  updateCarousel();
});

scrollPosition = 0;
updateCarousel();

// Scroll to up
const scrollToUp = document.getElementById("scrollToUp");

scrollToUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToUp.classList.remove("opacity-0", "invisible");
    scrollToUp.classList.add("opacity-100", "visible");
  } else {
    scrollToUp.classList.remove("opacity-100", "visible");
    scrollToUp.classList.add("opacity-0", "invisible");
  }
});
