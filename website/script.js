document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', handleLinkClick);
    }

    function handleLinkClick(event) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            // Internal link (smooth scroll)
            event.preventDefault();
            smoothScroll(targetId.substring(1));
        } else {
            // External link (navigate to another page)
            return true; // Let the link behave normally
        }
    }

    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    }
});
