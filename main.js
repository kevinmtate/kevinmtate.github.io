let navItemIsOpen = false;
let hamburgerExpanded = false;
const classes = {
    hidden: 'hidden',
    notOpaque: 'not-opaque',
    opaque: 'opaque',
    rotate0: 'rotate-zero',
    rotate1: 'rotate-one',
    semiOpaque: 'semi-opaque',
    visible: 'visible',
    "mobile-overlay": "mobile-menu-expanded-overlay",
};

document.addEventListener("DOMContentLoaded", function() {

    addEventHandlers();

    // if (document.documentElement.clientWidth <= 450) {
    //     [...document.getElementsByClassName('nav-header')].forEach();
    // }

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
    event.preventDefault();
    const hamburgerLines = document.getElementsByClassName('hamburger-line');

    if (!hamburgerExpanded) {
        document.querySelector('nav').style.right = 0;
        [...document.getElementsByClassName('overlay')].forEach((overlayEl) => {
            overlayEl.classList.add(classes["mobile-overlay"]);
        });
        hamburgerLines[0].classList.add(classes.rotate0);
        hamburgerLines[1].classList.add(classes.rotate1);
        hamburgerLines[2].style.opacity = '0';
        hamburgerExpanded = true;
    } else {
        document.querySelector('nav').style.right = '-70%';
        [...document.getElementsByClassName('overlay')].forEach((overlayEl) => {
            overlayEl.classList.remove(classes["mobile-overlay"]);
        });
        hamburgerLines[0].classList.remove(classes.rotate0);
        hamburgerLines[1].classList.remove(classes.rotate1);
        hamburgerLines[2].style.opacity = '1';
        hamburgerExpanded = false;
    }
};

const navHeaderClick = (event) => {
    const target = event.target;
    const contentElements = document.getElementsByClassName('content');
    const navHeaders = document.getElementsByClassName('nav-header');
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

// HELPERS
const hide = (element) => {
    if (element.classList.contains(classes.visible)) {
        element.classList.replace(classes.visible, classes.hidden);
    } else {
        element.classList.add(classes.hidden);
    }

    if (element.classList.contains(classes.notOpaque)) {
        element.classList.replace(classes.notOpaque, classes.opaque);
    } else {
        element.classList.add(classes.opaque);
    }
};

const show = (element) => {
    if (element.classList.contains(classes.hidden)) {
        element.classList.replace(classes.hidden, classes.visible);
    } else {
        element.classList.add(classes.visible);
    }
    
    if (element.classList.contains(classes.opaque)) {
        element.classList.replace(classes.opaque, classes.notOpaque);
    } else {
        element.classList.add(classes.notOpaque);
    }
};
