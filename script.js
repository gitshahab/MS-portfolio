document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (evt) {
            evt.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const body = document.body;

    const darkToggle = document.querySelector('.black-emoji');
    darkToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        body.classList.remove('cold-mode', 'desert-mode', 'cool-mode');
    });

    const coldToggle = document.querySelector('.cold-emoji');
    coldToggle.addEventListener('click', function () {
        body.classList.toggle('cold-mode');
        body.classList.remove('dark-mode', 'desert-mode', 'cool-mode');
    });

    const desertToggle = document.querySelector('.desert-emoji');
    desertToggle.addEventListener('click', function () {
        body.classList.toggle('desert-mode');
        body.classList.remove('dark-mode', 'cold-mode', 'cool-mode');
    });

    const coolToggle = document.querySelector('.cool-emoji');
    coolToggle.addEventListener('click', function () {
        body.classList.toggle('cool-mode');
        body.classList.remove('dark-mode', 'cold-mode', 'desert-mode');
    });
});
