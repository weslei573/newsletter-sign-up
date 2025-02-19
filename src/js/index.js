document.getElementById("email").addEventListener("input", (event) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
  const input = document.getElementById("email");
  const error = document.querySelector(".error");
  const email = input.value;
  const found = emailRegex.test(email);

  if (!found && email.length) {
    input.classList.add("invalid");
    error.classList.add("active");
  } else {
    input.classList.remove("invalid");
    error.classList.remove("active");
  }
});
