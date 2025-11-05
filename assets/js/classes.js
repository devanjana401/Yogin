document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    const text = card.querySelector(".text");
    text.style.opacity = "1";
  });
  card.addEventListener("mouseleave", () => {
    const text = card.querySelector(".text");
    text.style.opacity = "0";
  });
});

// class-details selection
document.querySelector('.card1').addEventListener('click', () => {
    document.querySelector('.cardA').scrollIntoView({ behavior: 'smooth',block: "start"  });
});

document.querySelector('.card2').addEventListener('click', () => {
    document.querySelector('.cardB').scrollIntoView({ behavior: 'smooth',block: "start" });
});

document.querySelector('.card3').addEventListener('click', () => {
    document.querySelector('.cardC').scrollIntoView({ behavior: 'smooth',block: "start" });
});

document.querySelector('.card4').addEventListener('click', () => {
    document.querySelector('.cardD').scrollIntoView({ behavior: 'smooth',block: "start" });
});

document.querySelector('.card5').addEventListener('click', () => {
    document.querySelector('.cardE').scrollIntoView({ behavior: 'smooth',block: "start" });
});

document.querySelector('.card6').addEventListener('click', () => {
    document.querySelector('.cardF').scrollIntoView({ behavior: 'smooth',block: "start" });
});


//method 2
// Hide all rows first
// document.addEventListener("DOMContentLoaded", function() {
//   const rows = document.querySelectorAll('.row1, .row2, .row3');

//   function showRow(rowClass) {
//     rows.forEach(row => row.style.display = 'none'); 
//     document.querySelector('.' + rowClass).style.display = 'flex'; 
//   }

//   document.querySelector('.card1').addEventListener('click', () => showRow('row1'));
//   document.querySelector('.card2').addEventListener('click', () => showRow('row1'));
//   document.querySelector('.card3').addEventListener('click', () => showRow('row2'));
//   document.querySelector('.card4').addEventListener('click', () => showRow('row2'));
//   document.querySelector('.card5').addEventListener('click', () => showRow('row3'));
//   document.querySelector('.card6').addEventListener('click', () => showRow('row3'));
//   rows.forEach(row => row.style.display = 'none');
// });



// method 2
// $(document).ready(function () {
//   // Hide all rows initially
//   $(".row1, .row2, .row3").hide();

//   // Function to show only one row with fade effect
//   function showRow(rowClass) {
//     $(".row1, .row2, .row3").hide(); // hide all
//     $("." + rowClass).fadeIn(500);   // show selected row smoothly
//   }

//   // Click events for cards
//   $(".card1, .card2").click(function () {
//     showRow("row1");
//   });

//   $(".card3, .card4").click(function () {
//     showRow("row2");
//   });

//   $(".card5, .card6").click(function () {
//     showRow("row3");
//   });
// });




