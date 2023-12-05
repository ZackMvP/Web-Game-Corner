let isFirstClick = true;

function myFunction() {
    const popupContainer = document.getElementById('popupContainer');
    const popupImage = document.getElementById('popupImage');
    
    if (isFirstClick) {
        popupImage.src = 'berhasil.png'; // Pastikan jalur ke gambar 'berhasil.png' benar
        isFirstClick = false;
    } else {
        popupImage.src = 'gagal.png'; // Pastikan jalur ke gambar 'gagal.png' benar
    }
    
    // Menampilkan popup
    popupContainer.style.display = 'flex';

    // Menutup popup ketika diklik
    popupContainer.onclick = function() {
        popupContainer.style.display = 'none';
    };
}

// Menggunakan kelas untuk menyeleksi semua tombol
// Menyeleksi semua tombol
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



  