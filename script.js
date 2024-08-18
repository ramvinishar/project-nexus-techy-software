document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('.navbarList');
  
  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior

      var targetId = this.getAttribute('href'); // Get target ID
      var targetSection = document.querySelector(targetId); // Get target section
      
      if (targetSection) {
        var offset = targetSection.offsetTop; // Get target offset
        
        window.scrollTo({
          top: offset,
          behavior: 'smooth' // Smooth scrolling
        });
      }
    });
  });
});

  