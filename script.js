

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

// Smooth sections fade-in-effect on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// Dark mode
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check saved preference or default to dark
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || !savedTheme) {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️"; // Switch icon to sun for light mode
    } else {
        darkModeToggle.textContent = "🌙"; // Switch icon to moon for dark mode
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkModeToggle.textContent = "🌙";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.querySelector(".experience__tabs");
    const tabs = document.querySelectorAll(".experience__tab");
    const details = document.querySelectorAll(".experience__details");

    // Enable horizontal scrolling on mobile
    if (tabsContainer) {
        tabsContainer.addEventListener("wheel", (event) => {
            event.preventDefault();
            tabsContainer.scrollLeft += event.deltaY;
        });
    }

    // Work Experience Tab Click Event
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            // Hide all details
            details.forEach((detail) => detail.classList.remove("active"));

            // Show the clicked tab's content
            const targetId = tab.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});


// Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Close menu when a link is clicked (for better UX)
    document
        .querySelectorAll(".desktop-nav__items-list__link")
        .forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
            });
        });
});

// Dynamic hero greeting
document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("hero-greeting");

    // Function to get user's local time and return the correct greeting
    function getGreeting() {
        const now = new Date();
        const hours = now.getHours(); // Get current hour in user's local time

        // Determine the appropriate greeting
        if (hours >= 5 && hours < 12) {
            return "👋 Good morning, I'm Elias!";
        } else if (hours >= 12 && hours < 17) {
            return "👋 Good afternoon, I'm Elias!";
        } else if (hours >= 17 && hours < 21) {
            return "👋 Good evening, I'm Elias!";
        } else {
            return "👋 Hello night owl, I'm Elias!";
        }
    }

    // Function to update greeting with fade effect
    function updateGreeting() {
        const newGreeting = getGreeting();

        // Apply fade-out effect
        greetingElement.style.opacity = "0";

        // Wait for fade-out to complete before changing text
        setTimeout(() => {
            greetingElement.textContent = newGreeting;
            greetingElement.style.opacity = "1"; // Fade back in
        }, 500); // Matches CSS transition time
    }

    // Initial update
    updateGreeting();

    // Update greeting every hour in case the user stays on the page
    setInterval(updateGreeting, 3600000); // 3600000 ms = 1 hour
});


// Scroll animations for Skills
document.addEventListener("DOMContentLoaded", () => {
    const skillCategories = document.querySelectorAll(".skills__category");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target); // Stops observing once it's visible
                }
            });
        },
        { threshold: 0.2 }
    );

    skillCategories.forEach((category) => observer.observe(category));
});

// Scroll animations for projects
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    projects.forEach((project) => {
        observer.observe(project);
    });
});

