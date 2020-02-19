(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // addEventHandlers();

    init();
  });

  const init = () => {
    initContentWidth();

    const contentEl         = document.querySelector('.content');
    const titleEl           = document.querySelector('header');
    const navEl             = document.querySelector('nav');
    const navUl             = navEl.querySelector('ul');
    const backgroundFilter  = document.querySelector('.background-filter');

    contentEl.addEventListener('scroll', () => {
      const scrollTop = contentEl.scrollTop;

      if (scrollTop) {
        titleEl.classList.add('title--scrolled');
        navEl.classList.add('nav--scrolled');
      }
      else {
        titleEl.classList.remove('title--scrolled');
        navEl.classList.remove('nav--scrolled');
      }

      if ((scrollTop / 2 / window.innerHeight) < .4) {
        navUl.style.top = scrollTop / 2 + "px";
      }
      if (backgroundFilter.style.opacity < .75) {
        backgroundFilter.style.opacity = scrollTop / 2000;
      } else if (scrollTop === 0) {
        backgroundFilter.style.opacity = 0;
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
