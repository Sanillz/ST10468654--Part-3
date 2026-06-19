// ================================
// SERVICE SEARCH FUNCTION
// ================================
function searchServices() {

    let input = document.getElementById("searchInput");

    if (!input) return;

    let filter = input.value.toLowerCase();

    let services = document.getElementsByClassName("service-card");

    for (let i = 0; i < services.length; i++) {

        let text = services[i].innerText.toLowerCase();

        if (text.includes(filter)) {
            services[i].style.display = "";
        } else {
            services[i].style.display = "none";
        }
    }
}


// ================================
// PORTFOLIO LIGHTBOX
// ================================
function openImage(imageSrc) {

    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
}

function closeImage() {

    let lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.style.display = "none";
}


// ================================
// CONTACT FORM VALIDATION
// ================================
document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let successMessage = document.getElementById("successMessage");

        // Reset message
        successMessage.innerHTML = "";

        // Validation rules
        if (fullname.length < 3) {
            alert("Please enter a valid full name.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return;
        }

        // Success message
        successMessage.innerHTML = "✅ Message sent successfully! We will contact you soon.";

        form.reset();
    });
});