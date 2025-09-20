const adminWA = "6285709518077";

// Kirim ke WhatsApp
function sendToWhatsApp(message) {
  const url = `https://wa.me/${adminWA}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// --- MLBB ---
const mlPrices = { epic:4000, legends:5000, mythic:8000, honor:11000, glory:15000, immortal:20000 };
const rankSelect = document.getElementById("rankSelect");
const starRange = document.getElementById("starRange");
const mlTotal = document.getElementById("mlTotal");
const loginButtons = document.querySelectorAll(".login-options button");
const loginInput = document.getElementById("loginType");

loginButtons.forEach(btn => btn