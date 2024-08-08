// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu diklik

document.querySelector("#h-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#h-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
