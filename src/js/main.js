(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // addEventHandlers();

    const vpw = window.innerWidth;
    const vph = window.innerHeight;
    const diff = vpw - vph;

    const sections = document.querySelectorAll('.content section');
    [...sections].forEach(el => {
      el.style.transform = 'rotate(90deg) translateY(' + diff / 2 + 'px)';
      el.style.marginTop = diff + 'px';
    })
    sections[0].style.marginTop = diff / 2 + 'px';
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
