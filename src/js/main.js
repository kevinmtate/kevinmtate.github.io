(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // addEventHandlers();

    init();
  });

  const init = () => {
    initContentWidth();

    const contentEl         = document.querySelector('.content');
    const titleEl           = document.querySelector('header');
    const navUl             = document.querySelector('nav ul');
    const backgroundFilter  = document.querySelector('.background-filter');
    const overlay           = document.querySelector('.overlay');

    contentEl.addEventListener('scroll', () => {
      const scrollTop = contentEl.scrollTop;

      scrollTop ? 
        titleEl.classList.add('title--scrolled') :
        titleEl.classList.remove('title--scrolled');

      if ((scrollTop / window.innerHeight) < .4) {
        navUl.style.top = scrollTop + "px";
      }
      if ((scrollTop / window.innerWidth) < .7) {
        // overlay
      }
      if (backgroundFilter.style.opacity < .75) {
        backgroundFilter.style.opacity = scrollTop / 1000;
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
