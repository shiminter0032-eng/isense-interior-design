// ================================
// ISENSE INTERIOR DESIGN
// MAIN JAVASCRIPT
// ================================


// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

    });

}


// ================================
// CLOSE MOBILE MENU
// WHEN CLICKING A NAVIGATION LINK
// ================================

if (navLinks) {

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-active");

        });

    });

}


// ================================
// CONTACT FORM → WHATSAPP
// ================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        // Get form values

        const name =
            form.querySelector('input[name="name"]')?.value ||
            form.querySelector('input[type="text"]')?.value ||
            "";

        const phone =
            form.querySelector('input[name="phone"]')?.value ||
            form.querySelector('input[type="tel"]')?.value ||
            "";

        const project =
            form.querySelector("select")?.value ||
            "";

        const message =
            form.querySelector("textarea")?.value ||
            "";


        // ISENSE WhatsApp number

        const whatsappNumber = "60127171176";


        // Create WhatsApp message

        const whatsappMessage =
            `Hi ISENSE Interior Design,%0A%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Phone: ${encodeURIComponent(phone)}%0A` +
            `Project Type: ${encodeURIComponent(project)}%0A` +
            `Project Details: ${encodeURIComponent(message)}`;


        // Open WhatsApp

        window.open(
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
            "_blank"
        );

    });

}


// ================================
// HEADER SCROLL EFFECT
// ================================

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


// ================================
// SMOOTH SCROLL
// ================================

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#" &&
            document.querySelector(targetId)
        ) {

            event.preventDefault();

            const target =
                document.querySelector(targetId);

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// CURRENT YEAR
// ================================

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
