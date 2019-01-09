let isOpen = false;
let offset = 0;
const navHeaders = document.getElementsByClassName('nav-header');
const contentElements = document.getElementsByClassName('content');
// const main 
// const intro
// ??????????????????????????????????????
const classes = {
    opaque: 'opaque',
    semiOpaque: 'semi-opaque',
    notOpaque: 'not-opaque',
    hidden: 'hidden',
    visible: 'visible',
};

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        if (event.target === document.getElementById('begin-button')) {
            letUsBegin();
        }

        if ([...navHeaders].indexOf(event.target) >= 0) {
            showNavItemContent(event.target);
        }
        
        if ([...document.getElementsByClassName('arrow')].indexOf(event.target) >= 0) {
            var journeyer = document.getElementById('journeyer');
            if (event.target === document.getElementById('arrow-top')) {
                offset += 50;
                journeyer.style.top = offset + 'px';
            } else {
                offset -= 50;
                journeyer.style.top = offset + 'px';
            }
        }
        
        
        
        if (event.target === document.getElementById('toggle')) {
            if (document.getElementById('intro').classList.contains(classes.visible)) {
                show(main);
                hide(intro);
            } else {
                show(intro);
                hide(main);
            }
        }
    });
});

// HELPERS
const hide = (element) => {
    element.classList.replace(classes.visible, classes.hidden);
    element.classList.replace(classes.notOpaque, classes.opaque);
};

const show = (element) => {
    element.classList.replace(classes.hidden, classes.visible);
    element.classList.replace(classes.opaque, classes.notOpaque);
};

const letUsBegin = () => {
    hide(document.getElementById('intro'));
    show(document.getElementById('main'));
};

const showNavItemContent = (target) => {
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
