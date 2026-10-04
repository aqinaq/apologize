const swapZone = document.querySelector("#swapZone");
const noButton = document.querySelector("#swapNo");
const hint = document.querySelector("#swapHint");
let swapped = false;
let lastSwap = 0;

function swapChoices(event) {
  if (event) event.preventDefault();
  const now = Date.now();
  if (now - lastSwap < 180) return;
  lastSwap = now;
  swapped = !swapped;
  swapZone.classList.toggle("is-swapped", swapped);
  hint.textContent = swapped ? "Ой, батырмалар орын ауыстырды 🌸" : "Тағы да ауысып кетті…";
}

noButton.addEventListener("pointerenter", swapChoices);
noButton.addEventListener("pointerdown", swapChoices);
noButton.addEventListener("click", swapChoices);
noButton.addEventListener("focus", swapChoices);
