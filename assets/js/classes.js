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
