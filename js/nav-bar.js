const navBtn = document.querySelector('.nav-btn');
const menu = document.querySelector('.menu');

navBtn.addEventListener('click', () => {
    const isOpened = navBtn.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        navBtn.setAttribute('aria-expanded', 'true');
        menu.classList.add('menu-active');
    } else {
        navBtn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('menu-active');
    }
});