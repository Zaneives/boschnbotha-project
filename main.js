const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
    iconHamburger.toggleAttribute("data-visible");
    iconClose.toggleAttribute("data-visible");
})
