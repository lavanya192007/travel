document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;
    const totalImages = images.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        slider.scrollTo({
            left: slider.offsetWidth * currentIndex,
            behavior: 'smooth'
        });
    }, 3000);
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
