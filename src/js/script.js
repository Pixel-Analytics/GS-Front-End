/* THEME  */
const body = document.body;

document.getElementById('theme-dark').addEventListener('click', () => {
    body.classList.remove('theme-reader', 'theme-light');
});

document.getElementById('theme-reader').addEventListener('click', () => {
    body.classList.remove('theme-light');
    body.classList.add('theme-reader');
});