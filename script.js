// HILANGKAN LOADING SETELAH SIAP
window.addEventListener('load', function() {
    const loading = document.getElementById('loadingScreen');
    loading.classList.add('hidden');
});

// === SLIDER GAMBAR GESER OTOMATIS ===
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');
const totalSlide = slides.length;

function gantiSlide(indeks) {
    if (indeks < 0) indeks = totalSlide - 1;
    if (indeks >= totalSlide) indeks = 0;
    slideIndex = indeks;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => gantiSlide(i));
});

setInterval(() => gantiSlide(slideIndex + 1), 5000);

// === MENU DI HP ===
const tombolMenu = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.nav-menu');

tombolMenu.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    tombolMenu.textContent = menuNav.classList.contains('active') ? '✕' : '☰';
});

// === FITUR CARI & FILTER PRODUK ===
const cariInput = document.getElementById('searchInput');
const pilihKategori = document.getElementById('categoryFilter');
const kartuProduk = document.querySelectorAll('.product-card');

function saringProduk() {
    const kataKunci = cariInput.value.toLowerCase();
    const kategori = pilihKategori.value;

    kartuProduk.forEach(kartu => {
        const judul = kartu.querySelector('.product-title').textContent.toLowerCase();
        const deskripsi = kartu.querySelector('.product-description').textContent.toLowerCase();
        const jenis = kartu.getAttribute('data-category');

        const cocokCari = judul.includes(kataKunci) || deskripsi.includes(kataKunci);
        const cocokKategori = kategori === 'all' || jenis === kategori;

        kartu.style.display = (cocokCari && cocokKategori) ? 'block' : 'none';
    });
}

cariInput.addEventListener('input', saringProduk);
pilihKategori.addEventListener('change', saringProduk);

// === POPUP PESAN & KIRIM KE WA ===
const tombolBeli = document.querySelectorAll('.btn-buy');
const popup = document.getElementById('orderModal');
const tutupPopup = document.querySelector('.close-modal');
const formPesan = document.getElementById('orderForm');
const inputProduk = document.getElementById('productName');

tombolBeli.forEach(tombol => {
    tombol.addEventListener('click', function() {
        const namaProduk = this.getAttribute('data-product');
        inputProduk.value = namaProduk;
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

tutupPopup.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

formPesan.addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('customerName').value;
    const hp = document.getElementById('customerPhone').value;
    const pesanan = document.getElementById('productName').value;
    const catatan = document.getElementById('customerNote').value || 'Tidak ada';

    const teksWA = `Halo Kak, saya mau pesan%0A%0A` +
                   `Nama: ${nama}%0A` +
                   `Nomor HP: ${hp}%0A` +
                   `Pesanan: ${pesanan}%0A` +
                   `Catatan: ${catatan}`;

    window.open(`https://wa.me/62895635764956?text=${teksWA}`, '_blank');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
    formPesan.reset();
});

// === JUMLAH PENGUNJUNG ONLINE ===
const tampilPengunjung = document.getElementById('viewerCount');
function ubahPengunjung() {
    const angka = Math.floor(Math.random() * 120) + 25;
    tampilPengunjung.textContent = angka;
}
ubahPengunjung();
setInterval(ubahPengunjung, 8000);


