document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("open");
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("open");
                navLinks.classList.remove("open");
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.length > 1) {
                e.preventDefault();
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    const navbar = document.querySelector(".navbar");
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const rect = targetEl.getBoundingClientRect();
                    const offset = rect.top + window.scrollY - navbarHeight - 10;

                    window.scrollTo({
                        top: offset,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Dummy submit untuk form
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Terima kasih! Pesan kamu sudah tercatat (demo).");
            contactForm.reset();
        });
    }
});
