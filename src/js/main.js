(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // addEventHandlers();

    init();
  });

  const init = () => {
    initContentWidth();
    initContentScroller();
  }

  const initContentWidth = () => {
    const width         = 1000;
    const height        = window.innerHeight;
    const diff          = width - height;
    const sections      = document.querySelectorAll('.content section');

    [...sections].forEach(el => {
      el.style.transform = 'rotate(90deg) translateY(' + diff / 2 + 'px)';
      el.style.marginTop = diff + 'px';
    })
  };

  const initContentScroller = () => {
    const contentEl         = document.querySelector('.content');
    const contentContainer  = contentEl.querySelector('.content-container');
    const titleEl           = document.querySelector('header');
    const navEl             = document.querySelector('nav');
    const navUl             = navEl.querySelector('ul');
    const backgroundFilter  = document.querySelector('.background-filter');
    const contentFixed      = contentEl.querySelector('.content-fixed');
    const contentScroller   = contentContainer.querySelector('.content-scroller');
    const filterOpacity     = 0.5;

    contentContainer.addEventListener('scroll', () => {
      const scrollTop = contentContainer.scrollTop;

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
      } else {
        navUl.style.top = window.innerHeight * .4 + "px";
      }

      if (backgroundFilter.style.opacity < filterOpacity) {
        backgroundFilter.style.opacity = scrollTop / 2000;
      } else if (backgroundFilter.style.opacity > filterOpacity) {
        backgroundFilter.style.opacity = filterOpacity;
      } else if (scrollTop === 0) {
        backgroundFilter.style.opacity = 0;
      }

      if (scrollTop / window.innerWidth >= .7) {
        contentFixed.style.display    = "block";
        contentScroller.style.display = "none";
      } else {
        contentFixed.style.display    = "none";
        contentScroller.style.display = "block";
      }
    });
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
