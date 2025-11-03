// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav ul li a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

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

function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const contactInfo = document.getElementById("contactInfo").value;

  const message = `New Codex Fam Contact:\n\n👤 Name: ${name}\n🔗 Contact/Social: ${contactInfo}`;
  const phoneNumber = "254721653602"; // your WhatsApp number (no +)

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  // show thank-you text
  const thankyou = document.getElementById("thankyou");
  thankyou.style.display = "block";
  thankyou.style.color = "#00bfff"; // neon blue vibe
  thankyou.style.textShadow = "0 0 10px #00bfff";
}
