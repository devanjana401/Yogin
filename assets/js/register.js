document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields before registering.");
        return;
    }
    // save user details into LocalStorage
    const userData = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    alert("Registered successfully! You can now sign in.");
    window.location.href = "sign-in.html";
});