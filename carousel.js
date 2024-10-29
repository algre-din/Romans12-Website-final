//This is the java codes for making "image carousel" or "slideshow." 

 

 

let slideIndex = 0; 

 

function showSlides() { 

    const slides = document.querySelectorAll('.carousel-slide img'); 

    slides.forEach((slide, index) => { 

        slide.style.display = "none"; // Hide all images 

    });

 

    slideIndex++; 

    if (slideIndex > slides.length) { 

        slideIndex = 1; // Reset to first image 

    } 

     

    slides[slideIndex - 1].style.display = "block"; // Display the current image 

    setTimeout(showSlides, 2000); // Change image every 2 seconds 

} 

 

 

 

function moveSlide(n) { 

    slideIndex += n; 

    const slides = document.querySelectorAll('.carousel-slide img'); 

    if (slideIndex < 1) { 

        slideIndex = slides.length; 

    } else if (slideIndex > slides.length) { 

        slideIndex = 1; 

    } 

    slides.forEach((slide, index) => { 

        slide.style.display = "none"; // Hide all images 

    }); 

    slides[slideIndex - 1].style.display = "block"; // Display the current image 

} 

 

// Initialize the slideshow 

showSlides(); 

 