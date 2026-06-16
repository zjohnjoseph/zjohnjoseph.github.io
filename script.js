function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Active nav link highlighting on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#desktop-nav .nav-links a, .menu-links a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active-link",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

// Scroll animations (fade-in sections)
const animateSections = document.querySelectorAll(
  "#about, #education, #experience, #skills, #projects, #publications, #contact"
);

animateSections.forEach((section) => section.classList.add("fade-hidden"));

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-visible");
        entry.target.classList.remove("fade-hidden");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

animateSections.forEach((section) => fadeObserver.observe(section));

// Sticky nav shadow on scroll
const desktopNav = document.getElementById("desktop-nav");
const hamburgerNav = document.getElementById("hamburger-nav");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;
  if (desktopNav) desktopNav.classList.toggle("nav-scrolled", scrolled);
  if (hamburgerNav) hamburgerNav.classList.toggle("nav-scrolled", scrolled);
});

// Back-to-top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
