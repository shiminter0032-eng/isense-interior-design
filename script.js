// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");
});


// ================================
// PROJECT FILTER
// ================================

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        projects.forEach(project => {

            if (
                category === "all" ||
                project.classList.contains(category)
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});


// ================================
// CONTACT FORM
// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        form.querySelector('input[type="text"]').value;

    const phone =
        form.querySelector('input[type="tel"]').value;

    const project =
        form.querySelector("select").value;

    const message =
        form.querySelector("textarea").value;


    const whatsappNumber = "60123456789";

    const whatsappMessage =
        `Hello ISENSE Interior Design,%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Project Type: ${project}%0A` +
        `Project Details: ${message}`;


    window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank"
    );

});
