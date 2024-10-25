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




const image = document.querySelector(".bottom-image");

window.addEventListener("scroll", () => {
    // Get the scroll position and the available scrollable height
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const scrollPercent = scrollPosition / (documentHeight - windowHeight);

    // Adjust the scaling range (1 to 2 for subtle effect)
    const minScale = 1;
    const maxScale = 3; // Adjust the upper bound for scaling if needed

    const scaleValue = minScale + (maxScale - minScale) * scrollPercent;

    // Apply the transform with scaling
    image.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
});


let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollPercent = scrollPosition / (documentHeight - windowHeight);
            const scaleValue = 1 + 4 * scrollPercent; // 1 to 5 scaling

            image.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;

            ticking = false;
        });

        ticking = true;
    }
});



// Navbar
function showSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
