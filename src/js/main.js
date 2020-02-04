(function() {
    const elements = {
        backgroundEl: document.querySelector('.background'),
        hamOneEl: document.querySelector('.ham.one'),
        hamTwoEl: document.querySelector('.ham.two'),
        hamThreeEl: document.querySelector('.ham.three'),
        nameEl: document.querySelector('.name'),
        navEl: document.querySelector('nav'),
        navLinks: document.querySelectorAll('.nav-links li a'),
        navLinksList: document.querySelector('.nav-links ul'),
        popupsList: document.querySelectorAll('.popup'),
        scrollToTopEl: document.querySelector('.back-to-top'),
        titleEl: document.querySelector('.title'),
    }

    document.addEventListener("DOMContentLoaded", function() {

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
    
        window.addEventListener("scroll", scrollToTop);
    
        document.querySelector('.back-to-top').addEventListener("click", function() {
            window.scrollTo(0, 0);
        });
    
    };
    
    const hamburgerMenuClick = () => {
        elements.navLinksList.classList.toggle("nav-links-visible");
        [...elements.navLinks].forEach(function(el) {
            el.classList.toggle("nav-link-opaque");
        });
        elements.hamOneEl.classList.toggle('one-clicked');
        elements.hamTwoEl.classList.toggle('two-clicked');
        elements.hamThreeEl.classList.toggle('three-clicked');
    };
    
    const contactLinkClick = (event) => {
        let isPopupVisible = event.target.nextElementSibling.classList.contains('popup-visible');
    
        if (!isPopupVisible) {
            [...elements.popupsList].forEach(function(el) {
                el.classList.remove('popup-visible');
            });
            event.target.nextElementSibling.classList.add('popup-visible');
        } else {
            event.target.nextElementSibling.classList.remove('popup-visible');
        }
    };
    
    const smoothScrolling = (event) => {
        document.getElementById(event.target.getAttribute('section')).scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    const scrollToTop = () => {
        window.scrollY > 0 ? 
            elements.scrollToTopEl.classList.add('back-to-top-visible') : 
            elements.scrollToTopEl.classList.remove('back-to-top-visible');
    };    
})();
