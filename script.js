function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButton = document.querySelector('.btn-see-more');
    const additionalProjects = document.querySelector('.wl-row-two');
  
    seeMoreButton.addEventListener('click', function(event) {
      event.preventDefault();
      additionalProjects.classList.toggle('show');
      seeMoreButton.textContent = additionalProjects.classList.contains('show') ? 'See Less' : 'See More';
    });
  });


  
  