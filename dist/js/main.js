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

let currentColour = localStorage.getItem('secondaryColor') || '#ffdd00';
root.style.setProperty('--secondary-color', currentColour);

textSecondary.addEventListener('click', toggleColour);

function toggleColour() {
    if(currentColour == '#ffdd00') {
        currentColour = '#a4a6ff';
    }
    else if(currentColour == '#a4a6ff') {
        currentColour = '#efaebf';
    }
    else {
        currentColour = '#ffdd00';
    }

    localStorage.setItem('secondaryColor', currentColour);
    root.style.setProperty('--secondary-color', currentColour);
}