let device_width = window.innerWidth;

let nav;
let main;
let nav_btn;

if (device_width <= 1007 ) {
    nav = document.querySelector('nav');
    nav_btn = document.querySelector('.nav-btn');
    main = document.querySelector('main');

    nav_btn.addEventListener('click', openNav);
    main.addEventListener('click', closeNav);
}

function openNav(e) {
    e.target.classList.add('nav-btn-close');
    nav.classList.add('nav-open');
    main.classList.add('make-btn');
}

function closeNav() {
    nav_btn.classList.remove('nav-btn-close');
    nav.classList.remove('nav-open');
    main.classList.remove('make-btn');
}