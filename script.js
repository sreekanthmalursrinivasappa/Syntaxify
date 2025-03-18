let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = "0";
        if (i === index) {
            slide.classList.add('active');
            slide.style.opacity = "1";
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeButton = document.querySelector(".close-menu");
    const navLinks = document.querySelectorAll(".mobile-nav a");

    // Open menu
    toggleButton.addEventListener("click", function () {
        mobileNav.classList.add("active");
    });

    // Close menu
    closeButton.addEventListener("click", function () {
        mobileNav.classList.remove("active");
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("active");
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}
// Auto-slide every 5 seconds
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
setInterval(autoSlide, 5000);

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);
