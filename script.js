function pesanJoki() {
  let rank = document.getElementById("rank");
  let harga = rank.value;
  alert("Pesanan joki Mobile Legends berhasil! Harga: Rp " + harga);
  window.location.href = "https://wa.me/6285709518077?text=Min%20saya%20mau%20joki%20ML%20Rank%20" + rank.options[rank.selectedIndex].text;
}

function pesanMontage() {
  let montage = document.getElementById("montage");
  let harga = montage.value;
  alert("Pesanan joki Montage berhasil! Harga: Rp " + harga);
  window.location.href = "https://wa.me/6285709518077?text=Min%20saya%20mau%20joki%20Montage%20Hero%20" + montage.options[montage.selectedIndex].text;
}
