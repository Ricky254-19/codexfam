// Highlight active nav link
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) link.classList.add("active");
});

// WhatsApp contact function
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const phone = "254721653602"; // your WhatsApp number

  if (!name || !message) {
    alert("Please fill in both fields before sending.");
    return;
  }

  const text = `Hello Codex Fam 👋%0A%0AI'm *${name}* and here's my message:%0A${message}%0A%0A🔥 Sent from the Codex Fam website`;
  const url = `https://wa.me/${phone}?text=${text}`;

  window.open(url, "_blank");

  const thankyou = document.getElementById("thankyou");
  thankyou.textContent = "✅ Your message has been prepared in WhatsApp. Thanks for reaching out, gamer!";
  thankyou.classList.add("show");

  document.querySelector(".contact-form").reset();

  setTimeout(() => thankyou.classList.remove("show"), 5000);
}
