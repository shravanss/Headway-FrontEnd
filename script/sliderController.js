document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Check if there are no slides
    if (slides.length === 0) {
      return;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Ensure slideIndex is within the valid range
    if (slideIndex < 1) {
      slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "flex";

    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Activate the corresponding dot
    dots[slideIndex - 1].className += " active";

    // Move to the next slide
    slideIndex++;

    // Change slide every 2 seconds
    setTimeout(showSlides, 5000);
  }
});
