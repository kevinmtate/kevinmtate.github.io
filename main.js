let isOpen = false;
const nameElement = document.getElementById('name');
const titleElement = document.getElementById('title');
const navHeaders = document.getElementsByClassName('nav-header');

document.addEventListener("DOMContentLoaded", function() {
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

    isOpen = true;
    targetContent.style.visibility = 'visible';
    targetContent.style.opacity = 1;
    nameElement.style.opacity = .25;
    titleElement.style.opacity = .25;
    [...navHeaders].forEach((element) => {
        if (element !== target) {
            element.style.opacity = .25;
        }
    });
};

const reset = () => {
    isOpen = false;
    nameElement.style.opacity = 1;
    titleElement.style.opacity = 1;
    [...navHeaders].forEach((element) => {
        element.style.opacity = 1;
        elementContent = element.parentElement.querySelector('.nav-content');
        elementContent.style.visibility = 'hidden';
        elementContent.style.opacity = 0;
    });
};
