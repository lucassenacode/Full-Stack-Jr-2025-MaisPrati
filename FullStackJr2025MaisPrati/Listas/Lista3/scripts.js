document.addEventListener('DOMContentLoaded', () => {
    
    const hamburgerButton = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    hamburgerButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

});