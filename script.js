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
    const navMenu = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Toggle menu on button click
    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    // Ensure toggle button only appears on mobile
    function checkScreenSize() {
        if (window.innerWidth > 768) {
            toggleButton.style.display = "none";
            navMenu.classList.remove("active"); // Hide menu on resize
        } else {
            toggleButton.style.display = "block";
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Run on page load
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
