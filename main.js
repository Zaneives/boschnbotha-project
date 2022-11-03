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

// !moved to carousel.js
// // *carousel v4.0 - background image version
// // *add or remove images here
// const images = [
//     "./images/image1.webp",
//     "./images/image2.webp",
//     "./images/image3.webp",
//     "./images/image4.webp",
//     "./images/image5.webp",
// ]

// // *inserts the images (from list above) into the page.
// for (image of images) {
//     const insertHere = document.querySelector("#img-creator")
//     const imageDOM = document.createElement("div");
//     imageDOM.setAttribute("class", "carousel-image")
//     imageDOM.setAttribute("style", `background-image: url('${image}');`)
//     insertHere.appendChild(imageDOM)
// }

// // *settings
// const carouselImages = document.querySelectorAll(".carousel-image")
// const fadeOutIn = document.querySelector("#fadeout")
// const numberOfImages = carouselImages.length; 
// let counter = 0;                        // set starting picture (starting at 0)
// const imageInterval = 12;                // set interval for images (in seconds)
// fadeOutIn.style.transition="1.6s";      // set fadeout/in
// carouselImages[counter].style.display="block"

// function carouselLoop() {
//     fadeOutIn.style.opacity = "1"
//     fadeOutIn.addEventListener("transitionend", () => {
//         carouselImages[counter].style.display="none"
//         counter = (counter + 1)%numberOfImages
//         carouselImages[counter].style.display="block"
//         setTimeout(() => {
//             fadeOutIn.style.opacity = .6
//         }, 50)
//     }, {once:true})
// }
// setInterval(carouselLoop, imageInterval * 1000)



// // *carousel v3.2. Now with eventlistener!
// // const carouselImages = document.querySelectorAll(".main-images img")
// // const carouselCSS = document.querySelector(".main-images img").style
// // carouselImages[0].style.display="block"
// // carouselImages[0].style.filter="opacity(0.4)"

// // settings
// // let counter = 0;                // set starting picture (starting at 0)
// // const numberOfImages = 5;       // set number of images here
// // const imageInterval = 12;       // set interval for images (in seconds)
// // carouselCSS.transition="1.2s";  // set fadeout/in

// // function carouselLoop() {
//     //     carouselImages[counter].style.filter="opacity(0)"
//     //     carouselImages[counter].addEventListener("transitionend",() => {
//         //         carouselImages[counter].style.display="none"
//         //         counter = (counter + 1)%numberOfImages
//         //         carouselImages[counter].style.display="block"
//         //         setTimeout(() => {
//             //             carouselImages[counter].style.filter="opacity(0.4)"    
//             //         }, 50)
//             //     }, {once: true})    
//             // }
//             // setInterval(carouselLoop, imageInterval * 1000)

        