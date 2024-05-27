document.addEventListener('DOMContentLoaded', () => {
    const  home= document.getElementById('home');
    const header= document.getElementById('header');

    home.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});