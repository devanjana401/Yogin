// class-filtering
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchBtn").addEventListener("click", () => {
    const level = document.getElementById("levelFilter").value.trim();
    const duration = document.getElementById("durationFilter").value.trim();
    const trainer = document.getElementById("trainerFilter").value.trim();

    const allCards = Array.from(document.querySelectorAll(".class-details .card"));
    const matchedCards = allCards.filter(card => {
      const cardLevel = card.dataset.level;
      const cardDuration = card.dataset.duration;
      const cardTrainer = card.dataset.trainer;

      const matchLevel = !level || cardLevel === level;
      const matchDuration = !duration || cardDuration === duration;
      const matchTrainer = !trainer || cardTrainer === trainer;

      return matchLevel && matchDuration && matchTrainer;
    });
    allCards.forEach(card => {
      card.style.display = matchedCards.includes(card) ? "block" : "none";
    });
    if (matchedCards.length > 0) {
      matchedCards[0].scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert("No classes found!");
    }
  });
});
// class-card-hover
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
  document.querySelector('.cardA').scrollIntoView({ behavior: 'smooth', block: "start" });
});

document.querySelector('.card2').addEventListener('click', () => {
  document.querySelector('.cardB').scrollIntoView({ behavior: 'smooth', block: "start" });
});

document.querySelector('.card3').addEventListener('click', () => {
  document.querySelector('.cardC').scrollIntoView({ behavior: 'smooth', block: "start" });
});

document.querySelector('.card4').addEventListener('click', () => {
  document.querySelector('.cardD').scrollIntoView({ behavior: 'smooth', block: "start" });
});

document.querySelector('.card5').addEventListener('click', () => {
  document.querySelector('.cardE').scrollIntoView({ behavior: 'smooth', block: "start" });
});

document.querySelector('.card6').addEventListener('click', () => {
  document.querySelector('.cardF').scrollIntoView({ behavior: 'smooth', block: "start" });
});
