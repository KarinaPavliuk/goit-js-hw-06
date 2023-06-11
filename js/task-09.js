let bodyEl = document.querySelector("body");
let buttonEl = document.querySelector(".change-color");
let spanEl = document.querySelector(".color");

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

    spanEl.textContent = color;
    bodyEl.style.backgroundColor = color;

}

buttonEl.addEventListener("click", getRandomHexColor);
