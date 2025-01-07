// Project Slideshow Logic
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.getElementsByClassName('project');
  let currentIndex = 0;

  // Initialize first project
  showProject(currentIndex);

  function showProject(index) {
    // Hide all projects
    for (let i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
      projects[i].classList.remove('active');
    }
    
    // Show current project
    projects[index].style.display = 'flex';
    projects[index].classList.add('active');
    
    // Update navigation state
    updateNavigation(index);
  }

  function updateNavigation(index) {
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    // Update arrow states
    prevArrow.style.opacity = index === 0 ? '0.5' : '1';
    nextArrow.style.opacity = index === projects.length - 1 ? '0.5' : '1';
  }

  window.navigateProject = function(direction) {
    const newIndex = currentIndex + direction;
    
    // Validate new index
    if (newIndex >= 0 && newIndex < projects.length) {
      currentIndex = newIndex;
      showProject(currentIndex);
    }
  };
});
