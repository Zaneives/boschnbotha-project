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
    
// *carousel v3
const carouselImages = document.querySelectorAll(".main-images img")
let counter = 0;
let numberOfImages = 5;     // set number of images here
carouselImages[0].style.display="block"
carouselImages[0].style.filter="opacity(0.4)"

function carouselLoop() {
    carouselImages[counter].style.filter="opacity(0.1)"
    carouselImages[counter].style.display="none"
    counter = (counter + 1)%numberOfImages
    carouselImages[counter].style.display="block"
    setTimeout(() => {
        carouselImages[counter].style.filter="opacity(0.4)"    
    }, 50);
}
setInterval(() => carouselLoop(), 10000)


// setInterval(() => {
//     carouselImages[0].style.display="none"
//     carouselImages[1].style.filter="opacity(0.1)"    
//     carouselImages[1].style.display="block"
//     setTimeout(() => {
//         carouselImages[1].style.filter="opacity(0.4)"    
//     }, 50);
// }, 5000)

// carouselImages[4].style.display="block"