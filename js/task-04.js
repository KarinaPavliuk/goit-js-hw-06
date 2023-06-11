let counterValue = 0;
const value = document.getElementById("value");

const decrBtn = document.querySelector("[data-action=decrement]");
const incrBtn = document.querySelector("[data-action=increment]");

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
decrBtn.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
incrBtn.addEventListener("click", increment);
