
// Get the navigation elements
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();
