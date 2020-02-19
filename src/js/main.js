(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // addEventHandlers();

    init();
  });

  const init = () => {
    initContentWidth();

    const contentEl   = document.querySelector('.content');
    const titleEl     = document.querySelector('header');
    const navEl       = document.querySelector('nav');
    const background  = document.querySelector('.background');

    contentEl.addEventListener('scroll', () => {
      if (contentEl.scrollTop) {
        titleEl.classList.add('title--scrolled');
        navEl.classList.add('nav--scrolled');
        background.classList.add('background--scrolled');
      } else {
        titleEl.classList.remove('title--scrolled');
        navEl.classList.remove('nav--scrolled');
        background.classList.remove('background--scrolled');
      }
    });
  }

  const initContentWidth = () => {
    const diff     = window.innerWidth - window.innerHeight;
    const sections = document.querySelectorAll('.content section');

    [...sections].forEach(el => {
      el.style.transform = 'rotate(90deg) translateY(' + diff / 2 + 'px)';
      el.style.marginTop = diff + 'px';
    })
    sections[0].style.marginTop = diff / 2 + 'px';
  }




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
