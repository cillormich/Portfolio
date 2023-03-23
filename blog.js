const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
})

document.querySelectorAll(".nav-item").array.forEach(n => n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
}))
