// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation effect for elements when they come into view
document.addEventListener('scroll', () => {
    const elementsToShow = document.querySelectorAll('.show-on-scroll');
    elementsToShow.forEach(element => {
        if (isVisible(element)) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});

// Function to check if an element is visible in the viewport
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}
