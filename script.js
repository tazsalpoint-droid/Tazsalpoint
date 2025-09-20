function pesanMLBB() {
  let rank = document.getElementById("rank").value;
  let bintang = document.getElementById("bintang").value;
  let noAdmin = "6285709518077"; // nomor WA admin

  let pesan = `Min saya mau joki Mobile Legends\nRank: ${rank}\nJumlah Bintang: ${bintang}`;
  let url = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}

function pesanMontage() {
  let paket = document.getElementById("paket").value;
  let noAdmin = "6285709518077"; // nomor WA admin

  let pesan = `Min saya mau joki Montage\nPaket: ${paket}`;
  let url = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}
