const btn = document.getElementById("ctaBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.textContent = "Nice! Your page is interactive.";
});
