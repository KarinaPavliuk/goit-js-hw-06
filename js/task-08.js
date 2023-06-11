const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

const user = {};

function onSubmit(event) {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email;
  const userPassword = event.currentTarget.elements.password;

  if (userEmail.value === "" || userPassword.value === "") {
    alert('All fields must be filled');
  } else {
    user.email = userEmail.value;
    user.password = userPassword.value;
    console.log(user);
  };
  event.currentTarget.reset();
}

