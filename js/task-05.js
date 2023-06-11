let input = document.getElementById("name-input");
console.log(input);
let span = document.getElementById("name-output");
console.log(span);

const getInputValue = () => {
  if (input.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value;
  }
};

input.addEventListener("input", getInputValue);
