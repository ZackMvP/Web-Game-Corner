function myFunction() {
    const popupContainer = document.getElementById('popupContainer');
    const popupImage = document.getElementById('popupImage');

        popupImage.src = 'berhasil-2.png'; // Pastikan jalur ke gambar 'berhasil.png' benar
    // Menampilkan popup
    popupContainer.style.display = 'flex';
    // Menutup popup ketika diklik
    popupContainer.onclick = function() {
        popupContainer.style.display = 'none';
    };
}
document.querySelectorAll(".device-button").forEach(button => {
    button.addEventListener("click", function() {
      // Menghapus kelas 'pressed' dari semua tombol
      document.querySelectorAll(".device-button").forEach(btn => {
        btn.classList.remove("pressed");
      });
      // Menambah kelas 'pressed' hanya pada tombol yang diklik
      this.classList.add("pressed");
    });
  });
