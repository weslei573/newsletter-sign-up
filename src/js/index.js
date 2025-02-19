const form = document.getElementById("form");

const validateEmail = (email, errorElement) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      errorElement.textContent = "Por favor, insira um email válido";
      errorElement.classList.add("active");
      return false;
    }
    return true;
  };

function handleSubmit(e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach((error) => {
    error.classList.remove("active");
  });

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  let isValid = true;

  isValid &= validateEmail(data.email, document.getElementById("email-error"));

  if (isValid) {
    console.log("Dados válidos:", data);
    // Enviar formulário ou fazer requisição AJAX
  }
}

form.addEventListener("submit", handleSubmit);
