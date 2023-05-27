document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetSection = document.querySelector(link.getAttribute("href"));

            sections.forEach(function(section) {
                if (section === targetSection) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });

            navbarLinks.forEach(function(navLink) {
                navLink.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});