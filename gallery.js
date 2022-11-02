const galleryImages = document.querySelectorAll(".grid-image img")
const modal = document.querySelector(".modal")
const modalImage = document.querySelector(".modal img")
galleryImages.forEach(image => {
    image.onclick = () => {
        modal.style.display = "block"
        modalImage.src = image.getAttribute("src")
    }
});

modal.onclick = () => modal.style.display = "none"
// document.querySelector(".modal span").onclick = () => modal.style.display = "none"