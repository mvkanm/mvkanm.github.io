const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");

const topBar = document.getElementById("bar-top");
const midBar = document.getElementById("bar-mid");
const botBar = document.getElementById("bar-bot");

const menuLinks = mobileMenu.querySelectorAll("a");

let isOpen = false;

function openMenu() {
    isOpen = true;

    mobileMenu.classList.remove("scale-y-0", "opacity-0");
    mobileMenu.classList.add("scale-y-100", "opacity-100");

    topBar.classList.add("translate-y-[6px]", "rotate-45");
    midBar.classList.add("opacity-0");
    botBar.classList.add("-translate-y-[6px]", "-rotate-45");

    document.body.style.overflow = "hidden"; // 🔒 lock scroll
}

function closeMenu() {
    isOpen = false;

    mobileMenu.classList.add("scale-y-0", "opacity-0");
    mobileMenu.classList.remove("scale-y-100", "opacity-100");

    topBar.classList.remove("translate-y-[6px]", "rotate-45");
    midBar.classList.remove("opacity-0");
    botBar.classList.remove("-translate-y-[6px]", "-rotate-45");

    document.body.style.overflow = ""; // 🔓 unlock scroll
}

burgerBtn.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();
});

// ✅ CLOSE MENU ON LINK CLICK
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});