const input = document.getElementById("validation-input");

function inputCheck() {
  const dataValueLength = Number(input.getAttribute("data-length"));
  console.log("dataValueLength", dataValueLength);

  const inpurValueLength = Number(input.value.trim().length);
  console.log("inpurValueLength", inpurValueLength);

  if (inpurValueLength === dataValueLength) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
}

input.addEventListener("blur", inputCheck);
