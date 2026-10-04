const form = document.querySelector("#replyForm");
const reply = document.querySelector("#reply");
const savedNote = document.querySelector("#savedNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const action = form.dataset.googleFormAction;
  const entry = form.dataset.googleEntry;

  if (!action || !entry) {
    savedNote.textContent = "Google Form әлі қосылмаған. Жауап ешқайда сақталған жоқ ♡";
    return;
  }

  const data = new URLSearchParams();
  data.append(entry, reply.value.trim());
  fetch(action, { method: "POST", mode: "no-cors", body: data })
    .then(() => {
      form.hidden = true;
      savedNote.textContent = "Рақмет. Жауабыңыз Google Form-ға жіберілді ♡";
    })
    .catch(() => {
      savedNote.textContent = "Жауап жіберілмеді. Интернетті тексеріп, қайта көріңіз.";
    });
});
