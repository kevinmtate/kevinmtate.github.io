(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // addEventHandlers();

    const viewport = document.querySelector('.viewport');
    const navLinks = document.querySelectorAll('nav li a');

    navLinks[0].addEventListener('click', () => {
      viewport.classList.toggle('show--about');
    });
  });

  const addEventHandlers = () => {

    document.getElementById('about').addEventListener('click', () => {
      document.getElementById('about').classList.toggle('show');
    });

    window.onscroll();

  };
  
  const smoothScrolling = (event) => {
    document.getElementById(event.target.getAttribute('section')).scrollIntoView({
      behavior: 'smooth'
    });
  };

})();
