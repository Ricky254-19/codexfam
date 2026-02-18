// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav ul li a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

function sendToWhatsApp(event) {
  event.preventDefault(); // stop page reload

  // Get form values
  let name = document.getElementById("name").value.trim();
  let contact = document.getElementById("contact").value.trim();

  // Replace with your WhatsApp number (254 = Kenya country code)
  let phoneNumber = "254721653602"; 

  if (name === "" || contact === "") {
    alert("Please fill in all fields before sending.");
    return;
  }

  // Format message
  let message = `*New Codex Fam Contact!*%0A
  👤 Name: ${name}%0A
  🔗 Contact/Social: ${contact}%0A
  🚀 Sent via Codex Fam Website`;

  // WhatsApp API link
  let url = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp chat
  window.open(url, "`https://wa.me/${phoneNumber}?text=${message}`");

  // Show thank-you message
  document.querySelector(".thankyou-msg").style.display = "block";
}

// --- Lightbox for Gallery ---
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = item.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
