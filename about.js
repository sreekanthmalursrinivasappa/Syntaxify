document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".value-box, .industry-box");

    function handleScroll() {
        fadeElements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
