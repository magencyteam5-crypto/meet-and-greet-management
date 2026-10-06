document.getElementById("year").textContent = new Date().getFullYear();

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const button = form.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Inquiry Sent";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 2000);
  });
}