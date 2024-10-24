//nav bar

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Function to check and toggle navbar visibility
    const toggleNavbar = () => {
        const homeSection = document.getElementById('home');
        const homeTop = homeSection.offsetTop;
        const homeHeight = homeSection.clientHeight;

        // Show navbar only if on the home section
        if (window.pageYOffset >= homeTop && window.pageYOffset < homeTop + homeHeight) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    };

    // Scroll listener for active class and navbar visibility
    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });

        toggleNavbar();  // Check if the navbar should be shown or hidden
    });

    toggleNavbar();  // Initial check on page load
});


//meet our team


let slideIndex = 0;
let autoSlideInterval;
const slides = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');
const slideWidth = slides[0].clientWidth;

function showSlide(index) {
    const slideContainer = document.querySelector('.carousel-slide');
    slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
    resetAutoSlide();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
    resetAutoSlide();
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlide(slideIndex);
    resetAutoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    autoSlide();
});
