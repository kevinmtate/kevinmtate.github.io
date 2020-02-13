(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // addEventHandlers();
    // containerScroll();

    const viewport = document.querySelector('.viewport');
    const navLinks = document.querySelectorAll('nav li a');

    navLinks[0].addEventListener('click', () => {
      viewport.classList.toggle('show--about');
    });
  });

  const addEventHandlers = () => {

    // document.querySelector('.ham-menu').addEventListener("click", hamburgerMenuClick);

    document.getElementById('about').addEventListener('click', () => {
      document.getElementById('about').classList.toggle('show');
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
    const navEl         = document.querySelector('nav');
    const hamOneEl      = document.querySelector('.ham.one');
    const hamTwoEl      = document.querySelector('.ham.two');
    const hamThreeEl    = document.querySelector('.ham.three');

    hamOneEl.classList.toggle('one-clicked');
    hamTwoEl.classList.toggle('two-clicked');
    hamThreeEl.classList.toggle('three-clicked');
    navEl.classList.toggle('nav-expanded');
  };
  
  const contactLinkClick = (event) => {
    const popupElList = document.querySelectorAll('.popup');
    let isPopupVisible = event.target.nextElementSibling.classList.contains('popup-visible');

    if (!isPopupVisible) {
      [...popupElList].forEach(function(el) {
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
    const scrollToTopEl = document.querySelector('.back-to-top');

    window.scrollY > 0 ? 
      scrollToTopEl.classList.add('back-to-top-visible') : 
      scrollToTopEl.classList.remove('back-to-top-visible');
  };    

  const containerScroll = () => {
    let prevClientX,
        prevClientY,
        movementX = 0,
        movementY = 0;
    const background = document.querySelector('.background');
    const increment = num => num + 0.05;
    const decrement = num => num - 0.05;
    const initTop = 0;
    const initLeft = 0;
    background.style.top = initTop + "px";
    background.style.left = initLeft + "px";

    document.addEventListener('mousemove', function(event) {
      const x     = event.clientX,
            y     = event.clientY,
            right = x > prevClientX,
            left  = x < prevClientX,
            up    = y > prevClientY,
            down  = y < prevClientY;
    
      if (right) {
        movementX = increment(movementX);
      } 
      if (left) {
        movementX = decrement(movementX);
      }
      if (up) {
        movementY = increment(movementY);
      } 
      if (down) {
        movementY = decrement(movementY);
      }
      
      background.style.left = initLeft + movementX + "px";
      background.style.top = initTop + movementY + "px";
      
      prevClientX = x;
      prevClientY = y;
    });
  };
})();
