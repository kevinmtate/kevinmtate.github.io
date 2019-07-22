(function() {
    const elements = {
        backgroundEl: document.querySelector('.background'),
        hamList: document.querySelectorAll('.ham'),
        hamMenu: document.querySelector('.ham-menu'),
        linksWithPopups: document.querySelectorAll('.link-with-popup'),
        nameEl: document.querySelector('.name'),
        navEl: document.querySelector('nav'),
        navLinks: document.querySelectorAll('.nav-links li a'),
        navLinksList: document.querySelector('.nav-links ul'),
        popupsList: document.querySelectorAll('.popup'),
        scrollEls: document.querySelectorAll('.scroll'),
        scrollToTopEl: document.querySelector('.scroll-to-top'),
        titleEl: document.querySelector('.title'),
    }

    const addEventHandlers = () => {
        elements.hamMenu.addEventListener("click", hamburgerMenuClick);
        [...elements.scrollEls].forEach(el => el.addEventListener("click", smoothScrolling));
        [...elements.linksWithPopups].forEach(el => el.addEventListener("click", contactLinkClick));
        window.addEventListener("scroll", scrollToTop);
        elements.scrollToTopEl.addEventListener("click", () => window.scrollTo(0, 0));
    };
    
    const intro = () => {
        elements.backgroundEl.classList.add('background-intro');
        elements.nameEl.classList.add('name-intro');
        elements.titleEl.classList.add('title-intro');
        elements.navEl.classList.add('nav-intro');
    };
    
    const hamburgerMenuClick = () => {
        elements.navLinksList.classList.toggle("nav-links-visible");
        [...elements.navLinks].forEach(el => el.classList.toggle("nav-link-opaque"));
        [...elements.hamList].forEach(ham => ham.classList.toggle('clicked'));
    };
    
    const contactLinkClick = (event) => {
        let isPopupVisible = event.target.nextElementSibling.classList.contains('popup-visible');
    
        if (!isPopupVisible) {
            [...elements.popupsList].forEach(el => el.classList.remove('popup-visible'));
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
            elements.scrollToTopEl.classList.add('scroll-to-top-visible') : 
            elements.scrollToTopEl.classList.remove('scroll-to-top-visible');
    };    

    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() { intro() }, 1);
        addEventHandlers();
    });
})();
