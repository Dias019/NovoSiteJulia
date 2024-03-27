
const slides = document.querySelectorAll('.slide');
const navigationButtons = document.querySelectorAll('.navigation label');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    updateNavigation(index);
}

function updateNavigation(index) {
    navigationButtons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

navigationButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        showSlide(i);
        currentSlide = i;
    });
});

// Automatic slideshow
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos