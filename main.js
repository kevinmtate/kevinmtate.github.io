let isOpen = false;
const navHeaders = document.getElementsByClassName('nav-header');
const classes = {
    opaque: 'opaque',
    semiOpaque: 'semi-opaque',
    notOpaque: 'not-opaque',
    hidden: 'hidden',
    visible: 'visible',
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        if (event.target === document.getElementById('begin-button')) {
            letUsBegin();
        } else if ([...navHeaders].indexOf(event.target) >= 0) {
            showNavItemContent(event.target);
        }
    });
});

const letUsBegin = () => {
    const intro = document.getElementById('intro');
    const main = document.getElementById('main');

    intro.style.color = 'black';
    intro.addEventListener("transitionend", () => {
        intro.style.display = 'none';
    }, false);
    // main.classList.add(classes.visible);
    // main.classList.add(classes.notOpaque);
}

const showNavItemContent = (target) => {
    let targetContent;

    if (target === navHeaders[0]) {
        targetContent = document.getElementById('journey');
    } else if (target === navHeaders[1]) {
        targetContent = document.getElementById('projects');
    } else {
        targetContent = document.getElementById('contact');
    }

    isOpen = true;
    targetContent.style.display = 'flex';
    targetContent.classList.add(classes.notOpaque);
    // targetContent.classList.replace()
    [...navHeaders].forEach((element) => {
        if (element !== target) {
            element.classList.add(classes.semiOpaque);
        }
    });
};

const reset = () => {
    isOpen = false;
    [...navHeaders].forEach((element) => {
        element.classList.remove(classes.semiOpaque);
        elementContent = element.parentElement.querySelector('.nav-content');
        elementContent.classList.add(classes.hidden);
        elementContent.classList.remove(classes.notOpaque);
    });
};
