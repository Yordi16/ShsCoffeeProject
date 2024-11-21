// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButton1 = document.querySelectorAll(".item-detail-button1");
const itemDetailButton2 = document.querySelectorAll(".item-detail-button2");
const itemDetailButton3 = document.querySelectorAll(".item-detail-button3");
const itemDetailButton4 = document.querySelectorAll(".item-detail-button4");

itemDetailButton1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButton2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButton3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButton4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

// Kilk tombol close modal
document.querySelector(".modal .close-icon1").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};

// Menu Detail
const DetailMenu = document.querySelector("#item-detail-menu");
const DetailMenuButtons = document.querySelectorAll(".menu-button");

DetailMenuButtons.forEach((btn) => {
  btn.onclick = (e) => {
    DetailMenu.style.display = "flex";
    e.preventDefault();
  };
});

// Kilk tombol close menu
document.querySelector(".detail-menu-container .close-icon").onclick = (e) => {
  DetailMenu.style.display = "none";
  e.preventDefault();
};

// Klik diluar modal & menu
window.onclick = (e) => {
  if (e.target === DetailMenu) {
    DetailMenu.style.display = "none";
  }

  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  }

  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }

  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  }

  if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = "none";
  }
};
