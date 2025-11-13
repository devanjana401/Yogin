// // clear localStorage every time page loads or it shows the username/use sessionstorage
// window.addEventListener("load", function () {
//   localStorage.clear();
// });

//sign-in validation + LocalStorage
function validatesignForm(event) {
    event.preventDefault();

    //clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    //get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //validate each field
    const namePattern = /^[a-zA-Z\s'-]+$/;
    if (name === "" || !namePattern.test(name)) {
        document.getElementById("nameError").innerText = "Enter a valid name (letters only)!";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email!";
        isValid = false;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText =
            "Password must be at least 5 characters and contain letters & numbers!";
        isValid = false;
    }

     if (!isValid) return;

    //check if registered user exists
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (!registeredUser) {
        alert("No registered user found. Please register first!");
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        return;
    }

    // validate login credentials
    if (
        name === registeredUser.name &&
        email === registeredUser.email &&
        password === registeredUser.password
    ) {
        localStorage.setItem("userName", registeredUser.name);
        localStorage.setItem("userEmail", registeredUser.email);
        localStorage.setItem("userPassword" ,registeredUser.password);
        localStorage.setItem("isLoggedIn", "true");

        alert("Sign-in successfully!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials! Please check email or password.");
    }
}

//home page changes are,
document.addEventListener("DOMContentLoaded", function () {
    const signBtn = document.getElementById("signBtn");
    if (!signBtn) return;

    const userName = localStorage.getItem("userName");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true" && userName) {
        //change button to sign-out
        signBtn.innerHTML = "SignOut";

        //welcome message when signed in
        const welcomeMsg = document.createElement("span");
        welcomeMsg.innerHTML = `&nbsp;&nbsp;Welcome, ${userName}!`;
        welcomeMsg.style.color = "black";
        welcomeMsg.style.fontWeight = "500";
        welcomeMsg.style.marginTop="9px";
        welcomeMsg.style.marginRight="12px";
        signBtn.parentNode.insertBefore(welcomeMsg, signBtn);  //parentNode.insertBefore(newElement, referenceElement);

        // handle Sign Out
        signBtn.addEventListener("click", function () {
            localStorage.clear();
            alert("Signed out successfully!");
            window.location.reload();
        });
    } else {
        signBtn.innerHTML = "Sign In";
    }
});

