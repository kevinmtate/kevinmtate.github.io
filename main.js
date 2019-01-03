let isOpen = false;

document.addEventListener("DOMContentLoaded", function() {
    const navHeaders = document.getElementsByClassName('nav-header');

    document.addEventListener("click", function(event) {
        if (isOpen) {
            reset();
        } else if ([...navHeaders].indexOf(event.target) >= 0) {
            showNavItemContent(event.target);
        }
    });
});

const showNavItemContent = (target) => {
    const targetContent = target.parentElement.querySelector('.nav-content');
    const navHeaders = document.getElementsByClassName('nav-header');
    const contentWrapper = document.querySelector('.content');

    isOpen = true;
    targetContent.style.display = 'flex';
    contentWrapper.style.color = '#c8c8c8';
    [...navHeaders].forEach((element) => {
        element.style.color = '#c8c8c8';
    });
    target.style.color = 'black';
    targetContent.style.color = 'black';
};

const reset = () => {
    const navHeaders = document.getElementsByClassName('nav-header');
    const contentWrapper = document.querySelector('.content');

    isOpen = false;
    contentWrapper.style.color = 'black';
    [...navHeaders].forEach((element) => {
        element.style.color = 'black';
        elementContent = element.parentElement.querySelector('.nav-content');
        elementContent.style.display = 'none';
    });
};
