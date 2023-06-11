const input = document.getElementById("validation-input");

function inputCheck() {
  let dataValueLength = Number(input.getAttribute("data-length"));
  console.log("dataValueLength", dataValueLength);

  let inpurValueLength = Number(input.value.trim().length);
  console.log("inpurValueLength", inpurValueLength);

  if (inpurValueLength === dataValueLength) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
}

input.addEventListener("blur", inputCheck);
