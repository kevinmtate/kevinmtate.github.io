let navItemIsOpen = false;
let hamburgerExpanded = false;
let isMobile = window.innerWidth <= 450 ? true : false;

document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() { intro() }, 1);
    addEventHandlers();

});

const addEventHandlers = () => {

    document.querySelector('.ham-menu').addEventListener("click", hamburgerMenuClick);

    [...document.querySelectorAll('.scroll')].forEach(function(el) {
        el.addEventListener("click", smoothScrolling);
    });

    [...document.querySelectorAll('.link-with-popup')].forEach(function(el) {
        el.addEventListener("click", contactLinkClick);
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            document.querySelector('.scroll-to-top').classList.add('scroll-to-top-visible');
        } else {
            document.querySelector('.scroll-to-top').classList.remove('scroll-to-top-visible');
        }
    })

    document.querySelector('.scroll-to-top').addEventListener("click", function() {
        window.scrollTo(0, 0);
    });

};

const intro = () => {
    document.querySelector('.background').classList.add('background-intro');
    document.querySelector('.name').classList.add('name-intro');
    document.querySelector('.title').classList.add('title-intro');
    document.querySelector('nav').classList.add('nav-intro');
};

const hamburgerMenuClick = () => {
    const navLinks = document.querySelector('.nav-links ul');
    const hamOne = document.querySelector('.ham.one');
    const hamTwo = document.querySelector('.ham.two');
    const hamThree = document.querySelector('.ham.three');
    const navLinksVisible = navLinks.classList.contains('nav-links-visible');
    
    if (!navLinksVisible) {
        navLinks.classList.add("nav-links-visible");
        [...document.querySelectorAll('.nav-links li a')].forEach(function(el) {
            el.classList.add("nav-link-opaque");
        });
        hamOne.classList.add('one-clicked');
        hamTwo.classList.add('two-clicked');
        hamThree.classList.add('three-clicked');
    } else {
        navLinks.classList.remove("nav-links-visible");
        hamOne.classList.remove('one-clicked');
        hamTwo.classList.remove('two-clicked');
        hamThree.classList.remove('three-clicked');
    }
};

const contactLinkClick = () => {
    const isPopupVisible = event.target.nextElementSibling.classList.contains('popup-visible');

    if (!isPopupVisible) {
        event.target.nextElementSibling.classList.add('popup-visible');
    } else {
        event.target.nextElementSibling.classList.remove('popup-visible');
    }
};

const smoothScrolling = () => {
    document.getElementById(event.target.getAttribute('section')).scrollIntoView({
        behavior: 'smooth'
    });
};
