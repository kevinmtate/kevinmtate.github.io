document.addEventListener("DOMContentLoaded", function() {
    const projectsHeader = document.getElementById('projects-header');
    projectsHeader.addEventListener("click", function() {
        const projectsList = document.getElementById('projects-list');
        const overlayElement = document.querySelector('.overlay');
        projectsList.style.display = 'flex';
        overlayElement.style.display = 'block';
    });
  });
