const galleryImages = document.querySelectorAll(".grid-image img")
const modal = document.querySelector(".modal")
const modalImage = document.querySelector(".modal img")
let slideNr = 0

galleryImages.forEach((image, index) => {
    image.onclick = () => {
        modal.style.display = "block"
        modalImage.src = image.getAttribute("src")
        slideNr = index
    }
});
document.querySelector(".modal span").onclick = () => modal.style.display = "none"

// *scroll through slides
function shiftSlides(n) {
    slideNr += n
    slideNr < 0 && (slideNr = galleryImages.length - 1)
    slideNr >= galleryImages.length && (slideNr = 0)
    modalImage.src = galleryImages[slideNr].getAttribute("src")
}

// *clicking outside the modal picture
addEventListener('mousedown', (event) => {
    if (modal.style.display === "block") {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
});

// *key presses to move slides
document.addEventListener("keyup", event => {    
    if (modal.style.display === "block") {
        switch (event.key) {
            case "Escape":
            case " ":
                modal.style.display = "none"
                break;
            case "ArrowLeft":
                shiftSlides(-1)
                break;
            case "ArrowRight":
                shiftSlides(1)
                break; 
            // default:
            //     console.log(event.key)
            //     break;
        } 
    }
  });

