document.addEventListener("DOMContentLoaded", (event) => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav-link[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

AOS.init();
