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

    // Tambah shadow saat navbar discroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".topbar");
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

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

// Highlight navbar link berdasarkan scroll posisi
const sections = document.querySelectorAll("[id]");
const navLinks = document.querySelectorAll(".top-nav a");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });

        mobileLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((sec) => observer.observe(sec));

document.querySelectorAll(".upload-img").forEach((input, index) => {
  input.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelectorAll(".prod-photo")[index].src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
});

