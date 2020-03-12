(function() {
  document.addEventListener("DOMContentLoaded", function() {

    init();
  });

  const init = () => {
    const nav = document.querySelector('nav');
    const newStickyNav = new StickyNav(nav);

    newStickyNav.init();
  }

  class StickyNav {
    constructor(navEl) {
      this.el = navEl;
      this.position = navEl.getBoundingClientRect();
      this.prevScrollY = 0;
    }
    
    addScrollEventListener() {
      window.addEventListener('scroll', () => this.setAsSticky());
    }
    
    setAsSticky() {
      const isBottom = window.scrollY >= this.position.bottom;
      const isTop = window.scrollY <= this.position.top;
      const scrollDown = window.scrollY > this.prevScrollY;
      const scrollUp = !scrollDown;
      
      if (scrollDown && isBottom) {
        this.el.classList.add('sticky');
      }
      
      if (scrollUp && isTop) {
        this.el.classList.remove('sticky');
      }
      
      this.prevScrollY = window.scrollY;
    }
    
    init() {
      this.addScrollEventListener();
    }
  }
  
})();
