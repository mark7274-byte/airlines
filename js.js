function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }
  let currentSlide = 0;
  const totalSlides = 3; // Number of slides
  const sliderContainer = document.querySelector('.slider-container');
  const dots = document.querySelectorAll('.dot');
  
  // Function to move to a specific slide
  function moveToSlide(slideIndex) {
      if (slideIndex >= totalSlides) {
          slideIndex = 0; // Loop back to the first slide
      } else if (slideIndex < 0) {
          slideIndex = totalSlides - 1; // Loop to the last slide
      }
  
      // Update the slider's position
      sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  
      // Update active dot
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
  
      // Update the current slide
      currentSlide = slideIndex;
  }
  
  // Auto-slide every 5 seconds
  setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides; // Cycle through slides
      moveToSlide(currentSlide);
  }, 5000);
