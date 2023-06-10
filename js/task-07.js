let inputRange = document.getElementById("font-size-control");
console.log("inputRange", inputRange);

let rangeSize = Number(inputRange.value);
console.log("rangeSize", rangeSize);

inputRange.addEventListener("input", rangeChanging);

const rangeChanging = () => {};
