/* THEME  */
const body = document.body;

document.getElementById('theme-dark').addEventListener('click', () => {
    body.classList.remove('theme-reader', 'theme-light');
});

document.getElementById('theme-reader').addEventListener('click', () => {
    body.classList.remove('theme-light');
    body.classList.add('theme-reader');
});

document.getElementById('theme-light').addEventListener('click', () => {
    body.classList.remove('theme-reader');
    body.classList.add('theme-light');
});

/* HAMBURGER MENU */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
const overlay   = document.getElementById('nav-overlay');

const openMenu = () => {
    hamburger.classList.add('active');
    navMenu.classList.add('open');
    overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
};