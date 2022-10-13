const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
    iconHamburger.toggleAttribute("data-visible");
    iconClose.toggleAttribute("data-visible");
})


// commment this out if you don't want picture carousel
let counter = 1
const tester = document.querySelector(".main-content")
function looper() {
    tester.style.backgroundImage = `url("./images/image${counter}.jpg")`
    counter = (counter)%5 + 1
}
looper()
setInterval(function(){looper()},20000)
