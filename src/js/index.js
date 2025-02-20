const form = document.getElementById("form");
function validateEmailInput(emailId, errorClass) {
  document.getElementById("email").addEventListener("input", (event) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
    const input = document.getElementById(emailId);
    const error = document.querySelector(errorClass);
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
}
validateEmailInput("email", ".error");

const validateEmail = (email, errorElement) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
  if (typeof email !== "string" || !email.match(emailRegex)) {
    errorElement.textContent = "Valid email required";
    errorElement.classList.add("active");
    return false;
  }
  return true;
};

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  let isValid = true;

  // Executar validações
  isValid &= validateEmail(data.email, document.getElementById("email-error"));

  const modal = document.querySelector(".modal-window");
  const box = document.querySelector(".box");

  if (isValid) {
    console.log("Dados válidos:", data);
    console.log(modal);
    modal.style.display = "flex"
    box.classList.add("disable");
  }
}

form.addEventListener("submit", handleSubmit);
