const menu = document.querySelector('.navbar__menu');
const menuButton = document.querySelector('.navbar__menu-button');
const menuIcon = document.querySelector('.navbar__menu-icon');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('navbar__menu--active');
    menuIcon.classList.toggle('iconoir-menu');
    menuIcon.classList.toggle('iconoir-xmark');

    if (menu.classList.contains('navbar__menu--active')) {
        menu.style.left = '0';
        menu.style.opacity = '1';
    } else {
        menu.style.left = '100dvw';
        menu.style.opacity = '0';
    }
});