// Initialize EmailJS
(function () {
    emailjs.init("rfuFFYZhu0_J3KVCq");
})();

// Validation + emailjs
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let isValid = true;

    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate each field
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required!";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email!";
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 10 digits!";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required!";
        isValid = false;
    }
    //Only send when all fields are valid
    if (isValid) {
        emailjs.sendForm("service_uye8cf2", "template_jitw5wm", this)
            .then(function () {
                alert("✅ Message sent successfully!");
                document.getElementById("contact-form").reset();
            })
            .catch(function (error) {
                alert("❌ Failed to send message: " + JSON.stringify(error));
            });
    }
});