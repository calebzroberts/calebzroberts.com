const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.style.opacity = "1";
    mobileMenu.style.visibility = "visible";
    mobileMenu.style.pointerEvents = "auto";
    mobileMenu.style.transform = "translateY(0)";
});

closeMenu.addEventListener("click", () => {
    mobileMenu.style.opacity = "0";
    mobileMenu.style.visibility = "hidden";
    mobileMenu.style.pointerEvents = "none";
    mobileMenu.style.transform = "translateY(-50px)";
});
