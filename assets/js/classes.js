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
