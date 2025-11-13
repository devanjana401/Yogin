// // clear localStorage every time page loads or it shows the username/use sessionstorage
// window.addEventListener("load", function () {
//   localStorage.clear();
// });


// signin page redirect
// document.getElementById("signBtn").addEventListener("click", function () {
//             window.location.href = "sign-in.html";
//         });
      
$("#signBtn").on("click", function () {
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

// $(document).ready(function () {
//   let btn = $("#topBtn");

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       btn.fadeIn();
//     } else {
//       btn.fadeOut();
//     }
//   });

//   btn.click(function () {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
//   });
// });

