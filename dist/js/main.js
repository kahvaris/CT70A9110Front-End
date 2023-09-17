// Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set menu state
        showMenu = false;
    }
}


const textSecondary = document.querySelector('.text-secondary');
const root = document.documentElement;
//root.style.setProperty('--secondary-color', 'yellow');
let currentColour = 1;

textSecondary.addEventListener('click', toggleColour);

function toggleColour() {
    if(currentColour == 1) {
        root.style.setProperty('--secondary-color', '#bdff00');
        //textSecondary.classList.add('second');
        currentColour = 2;
    }
    else if(currentColour == 2) {
        root.style.setProperty('--secondary-color', '#a4a6ff');
        //textSecondary.classList.add('third');
        currentColour = 3;
    }
    else {
        root.style.setProperty('--secondary-color', '#ffdd00');
        //textSecondary.classList.remove('second');
        //textSecondary.classList.remove('third');
        currentColour = 1;
    }
}