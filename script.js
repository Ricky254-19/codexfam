// ========================
// Highlight Active Nav Link
// ========================
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ========================
// WhatsApp Contact Form
// ========================
function sendToWhatsApp(event) {
  event.preventDefault();

  // Grab the form data
  const name = document.querySelector("#name").value.trim();
  const message = document.querySelector("#message").value.trim();
  const phoneNumber = "254721653602"; // your WhatsApp number

  // Build the WhatsApp link
  const url = `https://wa.me/${phoneNumber}?text=👋 Hey Codex Fam,%0A%0AI'm *${name}* and here's my message:%0A${message}`;

  // Open WhatsApp
  window.open(url, "_blank");

  // Show thank-you message
  const thankyou = document.getElementById("thankyou");
  thankyou.textContent = "✅ Your message has been prepared in WhatsApp. Thanks for reaching out, legend!";
  thankyou.classList.add("show");

  // Reset the form
  document.querySelector(".contact-form").reset();

  // Optional: hide the thank-you message after 5 seconds
  setTimeout(() => thankyou.classList.remove("show"), 5000);
}
