const adminWA = "6285709518077";

// --- Fungsi kirim ke WhatsApp ---
function sendToWhatsApp(message) {
  const url = `https://wa.me/${adminWA}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// --- Harga MLBB per bintang ---
const mlPrices = { epic:4000, legends:5000, mythic:8000, honor:11000, glory:15000, immortal:20000 };
const rankSelect = document.getElementById("rankSelect");
const starRange = document.getElementById("starRange");
const mlTotal = document.getElementById("mlTotal");

// --- Login MLBB ---
const loginButtons = document.querySelectorAll(".login-options button");
const loginInput = document.getElementById("loginType");
loginButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    loginButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loginInput.value = btn.getAttribute("data-login");
  });
});

// --- Update slider bintang dan harga MLBB ---
function updateStarValue(val) {
  document.getElementById("starValue").innerText = val;
  updateMLTotal();
}

function updateMLTotal() {
  const rank = rankSelect.value;
  const stars = parseInt(starRange.value);
  const total = mlPrices[rank] * stars;
  mlTotal.innerText = total.toLocaleString();
}

rankSelect.addEventListener("change", updateMLTotal);
starRange.addEventListener("input", updateStarValue);

// --- Harga Montage ---
const montagePrices = {
  assassin: { replay:20000, ingame:15000 },
  fighter: { replay:15000, ingame:10000 },
  tank: { replay:15000, ingame:10000 },
  mage: { replay:15000, ingame:10000 },
  marksman: { replay:20000, ingame:15000 }
};

// --- Role & Durasi Montage ---
const roleButtons = document.querySelectorAll(".role-options button");
const roleInput = document.getElementById("roleType");
const durasiButtons = document.querySelectorAll(".durasi-options button");
const durasiInput = document.getElementById("durasiType");
const montageTotal = document.getElementById("montageTotal");

roleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    roleButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    roleInput.value = btn.getAttribute("data-role");
    updateMontageTotal();
  });
});

durasiButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    durasiButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    durasiInput.value = btn.getAttribute("data-durasi");
    updateMontageTotal();
  });
});

function updateMontageTotal() {
  if (roleInput.value && durasiInput.value) {
    const total = montagePrices[roleInput.value][durasiInput.value];
    montageTotal.innerText = total.toLocaleString();
  } else {
    montageTotal.innerText = "0";
  }
}

// --- Submit MLBB dengan preview ---
document.getElementById("orderMLForm").addEventListener("submit", function(e){
  e.preventDefault();
  if(!loginInput.value){
    alert("⚠️ Pilih metode login dulu!");
    return;
  }
  const email = this.querySelector('input[type="text"]').value;
  const pass = this.querySelector('input[type="password"]').value;
  const rank = rankSelect.options[rankSelect.selectedIndex].text;
  const stars = starRange.value;
  const total = mlTotal.innerText;

  const message = `🛒 ORDER JOKI MLBB
=====================
📧 Login: ${email}
🔑 Password: ${pass}
🏆 Rank: ${rank}
⭐ Bintang: ${stars}
💰 Total: Rp ${total}
=====================
Pembayaran ke Dana: 085709518077`;

  if(confirm(`Preview Order MLBB:\n\n${message}\n\nKirim ke WhatsApp Admin?`)){
    sendToWhatsApp(message);
  }
});

// --- Submit Montage dengan preview ---
document.getElementById("orderMontageForm").addEventListener("submit", function(e){
  e.preventDefault();
  if(!roleInput.value || !durasiInput.value){
    alert("⚠️ Pilih role & durasi dulu!");
    return;
  }

  const role = roleInput.value;
  const durasi = durasiInput.value;
  const total = montageTotal.innerText;

  const message = `🎬 ORDER JOKI MONTAGE
=====================
🎭 Role: ${role}
⏱️ Durasi: ${durasi}
💰 Total: Rp ${total}
=====================
Pembayaran ke Dana: 085709518077`;

  if(confirm(`Preview Order Montage:\n\n${message}\n\nKirim ke WhatsApp Admin?`)){
    sendToWhatsApp(message);
  }
});