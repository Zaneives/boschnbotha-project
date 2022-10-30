const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const openNav = document.querySelector(".primary-nav")
navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
    iconHamburger.toggleAttribute("data-visible");
    iconClose.toggleAttribute("data-visible");    
// *these are the tweaks to get the transitions
    if (primaryNav.hasAttribute("data-visible")) {
        setTimeout(function(){
            openNav.style.top = "0px";
        }, 50);                
    } else {
        openNav.style.top = "-20rem";
    }
})

// *alternate menu button. The original one seems to work just fine with the new tweaks.
// console.log(primaryNav.hasAttribute("data-visible"))
// function toggle() {
//     if (openNav.style.top == "-20rem") {
//             openNav.style.display = "block"    
//         setTimeout(function(){
//             openNav.style.top = "0px";    
//         }, 50);
//     } else {
//         openNav.style.top = "-20rem";    
//         setTimeout(function(){
//                 openNav.style.display = "none"    
//             }, 300);    
//     }
// }
        
// *commment this out if you don't want picture carousel
// let counter = 1
// const tester = document.querySelector(".main-content")
// function looper() {
//     tester.style.backgroundImage = `url("./images/image${counter}.jpg")`
//     counter = (counter)%5 + 1
// }
// looper()
// setInterval(function(){looper()},20000)

// *carousel v2
// let counter = 1
// const tester = document.querySelector(".main-images img")
// function looper() {
//     tester.src = `./images/image${counter}.webp`
//     counter = (counter)%5 + 1
// }
// looper()
// setInterval(function(){looper()},20000)
    
// *carousel v3.2. Now with eventlistener!
const carouselImages = document.querySelectorAll(".main-images img")
const carouselCSS = document.querySelector(".main-images img").style
carouselImages[0].style.display="block"
carouselImages[0].style.filter="opacity(0.4)"

// settings
let counter = 0;                // set starting picture (starting at 0)
const numberOfImages = 5;       // set number of images here
const imageInterval = 12;       // set interval for images (in seconds)
carouselCSS.transition="1.2s";  // set fadeout/in

function carouselLoop() {
    carouselImages[counter].style.filter="opacity(0)"
    carouselImages[counter].addEventListener("transitionend",() => {
        carouselImages[counter].style.display="none"
        counter = (counter + 1)%numberOfImages
        carouselImages[counter].style.display="block"
        setTimeout(() => {
            carouselImages[counter].style.filter="opacity(0.4)"    
        }, 50)
    }, {once: true})    
}
setInterval(carouselLoop, imageInterval * 1000)

// function carouselLoop() {
//     carouselImages[counter].style.filter="opacity(0)"
//     setTimeout(() => {                                      // transition won't work with display property. Had to put a timeout for it to work.
//         carouselImages[counter].style.display="none"
//         counter = (counter + 1)%numberOfImages
//         carouselImages[counter].style.display="block"
//         setTimeout(() => {
//             carouselImages[counter].style.filter="opacity(0.4)"    
//         }, 50)
//     }, 1200)
// }
// setInterval(carouselLoop, 10000)