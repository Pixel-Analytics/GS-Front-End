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
const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
};

hamburger.addEventListener('click', () => {
    hamburger.classList.contains('active') ? closeMenu() : openMenu();
});

/* Close menu on Escape key */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
});

/* SLIDER */
const sliderEl      = document.querySelector('.slider');
const sliderWidth   = document.querySelector('.slider--width');
const sliderItems   = document.querySelectorAll('.slider--item');
const totalSlides   = sliderItems.length;
let currentSlide    = 0;
let autoSlide;


const getSlideWidth = () => sliderEl.clientWidth;

const initSlider = () => {
    const w = getSlideWidth();
    sliderWidth.style.width = `${w * totalSlides}px`;
    sliderItems.forEach(item => item.style.width = `${w}px`);
    updateMargin();
};

const updateMargin = () => {
    const w = getSlideWidth();
    sliderWidth.style.marginLeft = `-${currentSlide * w}px`;
};