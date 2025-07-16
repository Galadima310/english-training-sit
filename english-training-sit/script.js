// script.js

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fadeInOnScroll, .zoomInOnScroll, .slideLeftOnScroll, .slideRightOnScroll");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  