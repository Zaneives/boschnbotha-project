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

function goBack() {window.history.go(-1)}