window.onload = () => {
    // Select elements
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".mobile-nav");
    const closeIcon = document.querySelector(".close-icon");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
  
    // Ensure elements exist before adding event listeners
    if (menuIcon && navLinks && closeIcon) {
      // Open the mobile menu
      menuIcon.addEventListener("click", () => {
        navLinks.classList.remove("hidden");
        navLinks.classList.add("flex");
      });
  
      // Close the mobile menu
      closeIcon.addEventListener("click", () => {
        navLinks.classList.add("hidden");
        navLinks.classList.remove("flex");
      });
  
      // Close the menu when a link is clicked
      mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.add("hidden");
          navLinks.classList.remove("flex");
        });
      });
    } else {
      console.error("One or more required elements are missing.");
    }
  };


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
  