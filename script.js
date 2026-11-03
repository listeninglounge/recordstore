// Listening Lounge interactions (vanilla JS)

// Optional: animated entrance for cards
const cards = document.querySelectorAll(".record-card");
cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(10px)";
  setTimeout(() => {
    card.style.transition = "opacity 280ms ease, transform 280ms ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 140 * (index + 1));
});

// Optional analytics hook placeholder
// EDIT: If you add analytics later, track CTA clicks here.
document.querySelectorAll(".cta").forEach((link) => {
  link.addEventListener("click", () => {
    // Example: console.log("CTA clicked:", link.href);
  });
});
