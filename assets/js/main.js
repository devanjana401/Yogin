// signin page redirect
document.getElementById("signBtn").addEventListener("click", function () {
            window.location.href = "sign-in.html";
        });
        
// top-button
let btn = document.getElementById("topBtn");

window.onscroll = function() {
  if (window.scrollY > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.onclick = function() {
  window.scrollTo(0, 0);
}


