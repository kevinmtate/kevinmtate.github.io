document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.getElementsByClassName('nav-item');
    [...navItems].forEach((element) => {
        element.addEventListener("click", function() {
            showNavItemContent(element.getAttribute('id'));
        });
    });
    
  });

const showNavItemContent = (id) => {
    const navElement = document.getElementById(id);
    const content = navElement.querySelector('.js-nav-content');
    const overlayElement = document.getElementById('overlay');

    if (content.style.display === 'none') {
        content.style.display = 'flex';
        navElement.style.zIndex = 10;
        overlayElement.style.display = 'block';
    } else {
        content.style.display = 'none';
        overlayElement.style.display = 'none';
        navElement.style.zIndex = 'initial';
    }
}
