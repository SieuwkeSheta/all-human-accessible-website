const hamMenu = document.querySelector(".ham-menu")
const hamMenuButton = document.querySelector(".ham-menu-button")
const Blur = document.querySelector(".blur")

hamMenuButton.addEventListener("click", toggleHamMenu)
Blur.addEventListener("click", toggleHamMenu)


function toggleHamMenu() {
    hamMenuButton.classList.toggle("is-open")
    hamMenu.classList.toggle("is-open")
    Blur.classList.toggle("is-open")
}