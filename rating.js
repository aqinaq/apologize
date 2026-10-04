const line = document.querySelector("#ratingLine");
const bubble = document.querySelector("#ratingBubble");
const thumb = line.querySelector(".rating-thumb");
const progress = line.querySelector(".rating-progress");
const scores = [67, 3, 8, 1, 5, 0, 9, 6, 10, 2, 7, 4];
let currentIndex = 0;

function showScore(index) {
  currentIndex = Math.max(0, Math.min(scores.length - 1, index));
  const percent = (currentIndex / (scores.length - 1)) * 100;
  const score = scores[currentIndex];
  bubble.textContent = score;
  bubble.style.left = `${percent}%`;
  thumb.style.left = `${percent}%`;
  progress.style.width = `${percent}%`;
  line.setAttribute("aria-valuenow", currentIndex);
  line.setAttribute("aria-valuetext", score);
}

function indexFromPointer(event) {
  const rect = line.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(0.9999, (event.clientX - rect.left) / rect.width));
  return Math.floor(ratio * scores.length);
}

function revealFromPointer(event) {
  line.classList.add("is-active");
  showScore(indexFromPointer(event));
}

function chooseScore() {
  const score = scores[currentIndex];
  if (score <= 1) window.location.href = `sarange.html?score=${score}`;
  else if (score === 67) window.location.href = "error67.html";
  else window.location.href = `improve.html?score=${score}`;
}

line.addEventListener("pointerenter", revealFromPointer);
line.addEventListener("pointermove", revealFromPointer);
line.addEventListener("pointerdown", (event) => {
  revealFromPointer(event);
  line.setPointerCapture(event.pointerId);
});
line.addEventListener("pointerup", (event) => {
  if (line.hasPointerCapture(event.pointerId)) line.releasePointerCapture(event.pointerId);
});
line.addEventListener("pointerleave", () => {
  if (document.activeElement !== line) line.classList.remove("is-active");
});
line.addEventListener("click", chooseScore);
line.addEventListener("focus", () => line.classList.add("is-active"));
line.addEventListener("blur", () => line.classList.remove("is-active"));
line.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowUp") {
    event.preventDefault();
    line.classList.add("is-active");
    showScore(currentIndex + 1);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
    event.preventDefault();
    line.classList.add("is-active");
    showScore(currentIndex - 1);
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    chooseScore();
  }
});

showScore(0);
