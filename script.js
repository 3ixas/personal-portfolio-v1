

// Smooth animations for nav clicks
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
