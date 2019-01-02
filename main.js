document.addEventListener("DOMContentLoaded", function() {
    const projectsHeader = document.getElementById('projects-header');
    projectsHeader.addEventListener("click", function() {
        const projectsList = document.getElementById('projects-list');
        const projectsElement = document.getElementById('projects');
        const overlayElement = document.getElementsByClassName('overlay')[0];
        if (projectsList.style.display === 'none') {
            projectsList.style.display = 'flex';
            projectsElement.style.zIndex = 10;
            overlayElement.style.display = 'block';
        } else {
            projectsList.style.display = 'none';
            overlayElement.style.display = 'none';
            projectsElement.style.zIndex = 'initial';
        }
    });
  });
