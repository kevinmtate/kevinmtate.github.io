let navItemIsOpen = false;
let offset = 0;
const navHeaders = document.getElementsByClassName('nav-header');
const contentElements = document.getElementsByClassName('content');
// ??????????????????????????????????????
const main = document.getElementById('main');
const intro = document.getElementById('intro');
const journeyer = document.getElementById('journeyer');
// ??????????????????????????????????????
const classes = {
    opaque: 'opaque',
    semiOpaque: 'semi-opaque',
    notOpaque: 'not-opaque',
    hidden: 'hidden',
    visible: 'visible',
};

document.addEventListener("DOMContentLoaded", function() {

    addEventHandlers();

});

const addEventHandlers = () => {
    document.getElementById('begin-button').addEventListener("click", beginButtonClick);
    document.getElementById('begin-button').addEventListener("touchstart", beginButtonClick);

    document.getElementById('hamburger').addEventListener("click", hamburgerMenuClick);
    document.getElementById('hamburger').addEventListener("touchstart", hamburgerMenuClick);

    [...document.getElementsByClassName('nav-header')].forEach(function(navHeader) {
        navHeader.addEventListener("click", navHeaderClick);
    });

    [...document.getElementsByClassName('nav-item-expand-header')].forEach(function(navItemExpandHeader) {
        navItemExpandHeader.addEventListener("click", navItemExpandClick);
    });
};

const beginButtonClick = () => {
    hide(document.getElementById('intro'));
    show(document.getElementById('main'));
};

const hamburgerMenuClick = () => {

};

const navItemExpandClick = (event) => {
    const showContents = event.target.parentElement.querySelector('.nav-item-expand-contents');
    const navItemHeaders = document.getElementsByClassName('nav-item-header');

    if (!navItemIsOpen) {
        showContents.style.display = 'flex';
        [...navItemHeaders].forEach((element) => {
            element.parentElement.classList.add(classes.semiOpaque);
        });
        event.target.parentElement.classList.remove(classes.semiOpaque);
        navItemIsOpen = true;
    } else {
        showContents.style.display = 'none';
        [...navItemHeaders].forEach((element) => {
            element.parentElement.classList.remove(classes.semiOpaque);
        });
        navItemIsOpen = false;
    }
};

const navHeaderClick = (event) => {
    const target = event.target;
    let targetContent;

    if (target === navHeaders[0]) {
        targetContent = document.getElementById('journey');
    } else if (target === navHeaders[1]) {
        targetContent = document.getElementById('projects');
    } else {
        targetContent = document.getElementById('contact');
    };

    show(targetContent);

    [...navHeaders].forEach((element) => {
        if (element !== target) {
            element.classList.replace(classes.notOpaque, classes.semiOpaque);
        } else {
            element.classList.replace(classes.semiOpaque, classes.notOpaque);
        };
    });

    [...contentElements].forEach((element) => {
        if (element !== targetContent) {
            hide(element);
        };
    });
};

// HELPERS
const hide = (element) => {
    element.classList.replace(classes.visible, classes.hidden);
    element.classList.replace(classes.notOpaque, classes.opaque);
};

const show = (element) => {
    element.classList.replace(classes.hidden, classes.visible);
    element.classList.replace(classes.opaque, classes.notOpaque);
};
