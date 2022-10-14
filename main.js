const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const openNav = document.querySelector(".primary-nav")
navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
    iconHamburger.toggleAttribute("data-visible");
    iconClose.toggleAttribute("data-visible");    
    if (primaryNav.hasAttribute("data-visible")) {
        setTimeout(function(){
            openNav.style.top = "0px";
        }, 50);                
    } else {
        openNav.style.top = "-20rem";
    }
})

// *commment this out if you don't want picture carousel
// let counter = 1
// const tester = document.querySelector(".main-content")
// function looper() {
//     tester.style.backgroundImage = `url("./images/image${counter}.jpg")`
//     counter = (counter)%5 + 1
// }
// looper()
// setInterval(function(){looper()},20000)

// *alternate menu button. The original one seems to work just fine with the new tweaks.
// console.log(primaryNav.hasAttribute("data-visible"))
// function toggle() {
//     if (openNav.style.top == "-20rem") {
//         openNav.style.display = "block"    
//         setTimeout(function(){
//             openNav.style.top = "0px";    
//         }, 50);
        
//     } else {
//         openNav.style.top = "-20rem";    
//         setTimeout(function(){
//             openNav.style.display = "none"    
//         }, 300);
        
//     }
// }
