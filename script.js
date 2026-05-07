document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("nav-toggle");
  const navList = document.querySelector(".nav-list");
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");
  const submitBtn = document.getElementById("submit-btn");

  // Menu toggle functionality
  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
    toggleButton.setAttribute(
      "aria-expanded",
      navList.classList.contains("active")
    );
  });

  // Close menu when link is clicked
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });

  // Login button - secure event listener
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("Simulación sin login real");
    });
  }

  // Register button - secure event listener
  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      alert("Simulación completada");
    });
  }

  // Contact form submit button - secure event listener
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      alert("Simulación de envío de formulario");
    });
  }
});
