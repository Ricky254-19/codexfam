console.log("🔥 Script loaded successfully!");
// Highlight active nav link
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) link.classList.add("active");
});

// highlight active nav link
const currentpage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) link.classList.add("active");
});

function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const thankyou = document.getElementById("thankyou");

  if (!name || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  const fullMessage = `Hello Codex Fam! 👾%0A%0A` +
                      `Name: ${encodeURIComponent(name)}%0A` +
                      `Message: ${encodeURIComponent(message)}%0A%0A` +
                      `Sent from the Codex Fam website 🌐`;

  const phoneNumber = "254721653602";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

  // Open WhatsApp link
  window.open(whatsappURL, "_blank");

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";

  // Show glowing thank-you animation
  thankyou.style.display = "block";
  thankyou.style.opacity = 1;

  // Hide thank-you after a few seconds
  setTimeout(() => {
    thankyou.style.opacity = 0;
    setTimeout(() => (thankyou.style.display = "none"), 1000);
  }, 5000);
}


