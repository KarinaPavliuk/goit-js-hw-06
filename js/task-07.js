let inputRange = document.getElementById("font-size-control");
let spanText = document.getElementById('text');

const rangeChanging = () => {
  spanText.style.fontSize = inputRange.value + "px";
};

inputRange.addEventListener("input", rangeChanging);
