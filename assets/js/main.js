
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


