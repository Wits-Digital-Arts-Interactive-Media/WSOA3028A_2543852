
window.addEventListener("DOMContentLoaded", (event) =>{
    const menu_icon = document.querySelector("#menu-icon");
    const nav = document.querySelector("header > nav");
    menu_icon.addEventListener("click", () => {
        menu_icon.classList.toggle("bx-x");
        nav.classList.toggle("active");
    });
})
