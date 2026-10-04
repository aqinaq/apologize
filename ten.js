const score = new URLSearchParams(window.location.search).get("score");
const title = document.querySelector("#tenTitle");
const confettiRoot = document.querySelector("#confetti");
if (score === "67") title.innerHTML = "67/10 реніш.<br /><em>Жаңа рекорд 😭</em>";

const colors = ["#ff4f8b", "#ffb0ca", "#ffd66b", "#9c6ade", "#ffffff"];
for (let i = 0; i < 55; i += 1) {
  const piece = document.createElement("span"); piece.className = "confetti-piece";
  piece.style.left = `${Math.random() * 100}vw`; piece.style.background = colors[Math.floor(Math.random() * colors.length)];
  piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`); piece.style.setProperty("--speed", `${2.4 + Math.random() * 2.4}s`);
  piece.style.animationDelay = `${Math.random() * .7}s`; confettiRoot.appendChild(piece); setTimeout(() => piece.remove(), 5600);
}
