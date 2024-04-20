document.addEventListener("DOMContentLoaded", function() {
    // Get the About Us link in the navigation bar
    var aboutLink = document.querySelector('nav #about-link');

    // Add a click event listener to the About Us link
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Get the target element to scroll to (in this case, the About section)
        var targetElement = document.getElementById('about');

        // Calculate the position of the target element relative to the document
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        // Smoothly scroll to the target position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the Contact Us link in the navigation bar
    var aboutLink = document.querySelector('nav #contact-link');

    // Add a click event listener to the Contact Us link
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Get the target element to scroll to (in this case, the Contact Us section)
        var targetElement = document.getElementById('contact');

        // Calculate the position of the target element relative to the document
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        // Smoothly scroll to the target position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image slider
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    // Form validation
    document.getElementById("myForm").addEventListener("submit", function(event) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        if (name === "" || email === "") {
            event.preventDefault();
            alert("Name and email are required!");
        }
    });

    // Toggle navigation menu
    document.getElementById("menuToggle").addEventListener("click", function() {
        let nav = document.getElementById("nav");
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    });
});
