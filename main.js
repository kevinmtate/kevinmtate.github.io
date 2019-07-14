var navLinksList = document.querySelector('.nav-links ul');
var navLinks = document.querySelectorAll('.nav-links li a');
var hamOneEl = document.querySelector('.ham.one');
var hamTwoEl = document.querySelector('.ham.two');
var hamThreeEl = document.querySelector('.ham.three');
var popupsList = document.querySelectorAll('.popup');
var scrollToTopEl = document.querySelector('.scroll-to-top');

document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() { intro() }, 1);
    addEventHandlers();

});

function addEventHandlers() {

    document.querySelector('.ham-menu').addEventListener("click", hamburgerMenuClick);

    [...document.querySelectorAll('.scroll')].forEach(function(el) {
        el.addEventListener("click", smoothScrolling);
    });

    [...document.querySelectorAll('.link-with-popup')].forEach(function(el) {
        el.addEventListener("click", contactLinkClick);
    });

    window.addEventListener("scroll", scrollToTop);

    document.querySelector('.scroll-to-top').addEventListener("click", function() {
        window.scrollTo(0, 0);
    });

};

function intro() {
    document.querySelector('.background').classList.add('background-intro');
    document.querySelector('.name').classList.add('name-intro');
    document.querySelector('.title').classList.add('title-intro');
    document.querySelector('nav').classList.add('nav-intro');
};

function hamburgerMenuClick() {
    navLinksList.classList.toggle("nav-links-visible");
    [...navLinks].forEach(function(el) {
        el.classList.toggle("nav-link-opaque");
    });
    hamOneEl.classList.toggle('one-clicked');
    hamTwoEl.classList.toggle('two-clicked');
    hamThreeEl.classList.toggle('three-clicked');
};

function contactLinkClick() {
    var isPopupVisible = event.target.nextElementSibling.classList.contains('popup-visible');

    if (!isPopupVisible) {
        [...popupsList].forEach(function(el) {
            el.classList.remove('popup-visible');
        });
        event.target.nextElementSibling.classList.add('popup-visible');
    } else {
        event.target.nextElementSibling.classList.remove('popup-visible');
    }
};

function smoothScrolling() {
    document.getElementById(event.target.getAttribute('section')).scrollIntoView({
        behavior: 'smooth'
    });
};

function scrollToTop() {
    if (window.scrollY > 0) {
        scrollToTopEl.classList.add('scroll-to-top-visible');
    } else {
        scrollToTopEl.classList.remove('scroll-to-top-visible');
    }
};
