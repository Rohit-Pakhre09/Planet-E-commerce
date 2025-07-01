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
