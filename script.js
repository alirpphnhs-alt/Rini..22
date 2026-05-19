// --- Database Produk ---
const products = [
    {
        id: 'canva',
        name: 'CANVA PRO',
        category: 'design',
        image: 'assets/produk/canva.jpg',
        desc: 'Akses jutaan template premium, hapus background otomatis, dan fitur pro lainnya.',
        prices: {
            1: 6500, 2: 9500, 3: 13500, 4: 16500, 5: 19000, 6: 21500,
            7: 23500, 8: 25500, 9: 27000, 10: 28500, 11: 30000, 12: 32500
        }
    },
    {
        id: 'capcut',
        name: 'CAPCUT PRO',
        category: 'design',
        image: 'assets/produk/capcut.jpg',
        desc: 'Edit video tanpa watermark, akses efek pro, dan fitur AI canggih.',
        prices: {
            1: 21000, 2: 36000, 3: 49000, 4: 61000, 5: 72000, 6: 82000,
            7: 91000, 8: 99000, 9: 106000, 10: 112000, 11: 117000, 12: 120000
        }
    },
    {
        id: 'netflix',
        name: 'NETFLIX PREMIUM',
        category: 'streaming',
        image: 'assets/produk/netflix.jpg',
        desc: 'Nonton film & series 4K UHD, profil privat, anti hold, garansi full.',
        prices: {
            1: 25000, 2: 47000, 3: 68000, 4: 88000, 5: 107000, 6: 125000,
            7: 142000, 8: 158000, 9: 173000, 10: 187000, 11: 200000, 12: 210000
        }
    },
    {
        id: 'chatgpt',
        name: 'CHATGPT PLUS',
        category: 'productivity',
        image: 'assets/produk/chatgpt.jpg',
        desc: 'Akses GPT-4 prioritas, response lebih cepat, plugin DALL-E 3.',
        prices: {
            1: 27000, 2: 51000, 3: 73000, 4: 93000, 5: 112000, 6: 130000,
            7: 147000, 8: 163000, 9: 178000, 10: 192000, 11: 205000, 12: 215000
        }
    },
    {
        id: 'getcontact',
        name: 'GETCONTACT PREMIUM',
        category: 'productivity',
        image: 'assets/produk/getcontact.jpg',
        desc: 'Lihat tag kontak orang lain, cek siapa yang save nomor kamu.',
        prices: { 1: 15000, 3: 35000, 6: 60000, 12: 100000 } // Estimasi harga
    },
    {
        id: 'bstation',
        name: 'BSTATION PREMIUM',
        category: 'streaming',
        image: 'assets/produk/bstation.jpg',
        desc: 'Nonton anime tanpa iklan, kualitas HD, akses konten eksklusif.',
        prices: { 1: 12000, 3: 30000, 6: 55000, 12: 95000 }
    },
    {
        id: 'youtube',
        name: 'YOUTUBE PREMIUM',
        category: 'streaming',
        image: 'assets/produk/youtube.jpg',
        desc: 'Bebas iklan, background play, download video, include YT Music.',
        prices: { 1: 18000, 3: 45000, 6: 80000, 12: 140000 }
    },
    {
        id: 'telegram',
        name: 'TELEGRAM PREMIUM',
        category: 'productivity',
        image: 'assets/produk/telegram.jpg',
        desc: 'Upload file 4GB, convert voice to text, sticker animasi unik.',
        prices: { 1: 20000, 3: 50000, 6: 90000, 12: 160000 }
    },
    {
        id: 'picsart',
        name: 'PICSART PRO',
        category: 'design',
        image: 'assets/produk/picsart.jpg',
        desc: 'Edit foto profesional di HP, ribuan stiker & font premium.',
        prices: { 1: 15000, 3: 35000, 6: 60000, 12: 100000 }
    },
    {
        id: 'vidio',
        name: 'VIDIO PLATINUM',
        category: 'streaming',
        image: 'assets/produk/vidio.jpg',
        desc: 'Nonton Liga Inggris, sinetron, film lokal tanpa iklan.',
        prices: { 1: 22000, 3: 55000, 6: 100000, 12: 180000 }
    },
    {
        id: 'viu',
        name: 'VIU PREMIUM',
        category: 'streaming',
        image: 'assets/produk/viu.jpg',
        desc: 'Drama Korea terbaru, subtitle Indo cepat, download offline.',
        prices: { 1: 19000, 3: 48000, 6: 85000, 12: 150000 }
    },
    {
        id: 'wetv',
        name: 'WETV VIP',
        category: 'streaming',
        image: 'assets/produk/wetv.jpg',
        desc: 'Film & Drama China terbaru, kualitas 1080p, early access.',
        prices: { 1: 18000, 3: 45000, 6: 80000, 12: 140000 }
    },
    {
        id: 'iqiyi',
        name: 'IQIYI VIP',
        category: 'streaming',
        image: 'assets/produk/iqiyi.jpg',
        desc: 'Akses konten eksklusif Asia, Dolby Audio, tampilan bebas iklan.',
        prices: { 1: 18000, 3: 45000, 6: 80000, 12: 140000 }
    },
    {
        id: 'duolingo',
        name: 'DUOLINGO SUPER',
        category: 'productivity',
        image: 'assets/produk/duolingo.jpg',
        desc: 'Belajar bahasa tanpa iklan, nyawa tak terbatas, review mistake.',
        prices: { 1: 15000, 3: 35000, 6: 60000, 12: 100000 }
    },
    {
        id: 'zoom',
        name: 'ZOOM PRO',
        category: 'productivity',
        image: 'assets/produk/zoom.jpg',
        desc: 'Meeting tanpa batas waktu 40 menit, cloud recording, host control.',
        prices: { 1: 25000, 3: 60000, 6: 110000, 12: 200000 }
    },
    {
        id: 'alightmotion',
        name: 'ALIGHT MOTION',
        category: 'design',
        image: 'assets/produk/alight.jpg',
        desc: 'Motion graphics profesional di Android, no watermark export.',
        prices: { 1: 15000, 3: 35000, 6: 60000, 12: 100000 }
    }
];

// --- State Management ---
let currentCategory = 'all';
let searchQuery = '';

// --- DOM Elements ---
const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('search-input');
const categoryBtns = document.querySelectorAll('.cat-btn');
const loadingScreen = document.getElementById('loading-screen');
const modal = document.getElementById('payment-modal');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Simulate Loading
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    renderProducts();
    startSlider();
    startFakeViewer();
    startCountdownTimer();
    startFakeOrders();
});

// --- Render Products ---
function renderProducts() {
    productContainer.innerHTML = '';
    
    const filtered = products.filter(p => {
        const matchesCat = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        productContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">Produk tidak ditemukan.</p>';
        return;
    }

    filtered.forEach(product => {
        // Get lowest price for display
        const minPrice = Math.min(...Object.values(product.prices));
        const maxPrice = Math.max(...Object.values(product.prices));
        const priceDisplay = minPrice === maxPrice 
            ? formatRupiah(minPrice) 
            : `${formatRupiah(minPrice)} - ${formatRupiah(maxPrice)}`;
        
        // Create Options for Select
        let optionsHtml = '';
        for (const [month, price] of Object.entries(product.prices)) {
            optionsHtml += `<option value="${price}" data-month="${month}">${month} Bulan - ${formatRupiah(price)}</option>`;
        }

        // Random Stock
        const stock = Math.floor(Math.random() * 15) + 2;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200/2a2a3e/ffffff?text=${product.name.replace(' ', '+')}'">
                <span class="card-badge">BEST SELLER</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-desc">${product.desc}</p>
                
                <div class="price-wrapper">
                    <span class="old-price">${formatRupiah(minPrice * 1.5)}</span>
                    <div class="new-price" id="price-${product.id}">${priceDisplay}</div>
                </div>

                <div class="stock-info">
                    <i class="fa-solid fa-fire"></i> Sisa stok: <span id="stock-${product.id}">${stock}</span>
                </div>

                <select class="duration-select" onchange="updatePrice('${product.id}', this)">
                    ${optionsHtml}
                </select>

                <div class="card-actions">
                    <button class="btn-detail" onclick="alert('Detail: ${product.desc}\\nGaransi 100% Uang Kembali jika akun mati.')">Detail</button>
                    <button class="btn-buy" onclick="openPayment('${product.id}', this)">Beli Sekarang</button>
                </div>
            </div>
        `;
        productContainer.appendChild(card);
    });
}

// --- Helper Functions ---
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

function updatePrice(productId, selectElement) {
    const price = selectElement.value;
    const month = selectElement.options[selectElement.selectedIndex].dataset.month;
    const priceEl = document.getElementById(`price-${productId}`);
    priceEl.innerText = formatRupiah(price);
    
    // Add animation effect
    priceEl.style.transform = "scale(1.1)";
    setTimeout(() => priceEl.style.transform = "scale(1)", 200);
}

// --- Event Listeners ---
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        renderProducts();
    });
});

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
});

document.querySelector('.close-modal').addEventListener('click', closeModal);

// --- Payment Logic ---
let paymentInterval;

function openPayment(productId, btnElement) {
    const product = products.find(p => p.id === productId);
    const card = btnElement.closest('.product-card');
    const select = card.querySelector('.duration-select');
    const price = select.value;
    const month = select.options[select.selectedIndex].dataset.month;

    // Set Modal Content
    document.getElementById('modal-product-name').innerText = product.name;
    document.getElementById('modal-price').innerText = formatRupiah(price);
    document.getElementById('modal-duration').innerText = `Durasi: ${month} Bulan`;
    
    // Show Modal
    modal.classList.add('active');
    modal.classList.remove('hidden');
    
    // Start Countdown
    let timeLeft = 60;
    const timerEl = document.getElementById('countdown-pay');
    const progressBar = document.getElementById('payment-progress');
    
    clearInterval(paymentInterval);
    timerEl.innerText = timeLeft;
    progressBar.style.width = '100%';
    
    paymentInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        progressBar.style.width = `${(timeLeft/60)*100}%`;
        
        if (timeLeft <= 0) {
            clearInterval(paymentInterval);
            alert("Waktu pembayaran habis. Silakan refresh.");
            closeModal();
        }
    }, 1000);

    // Setup Confirm Buttons
    const waLink = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20sudah%20transfer%20untuk%20${encodeURIComponent(product.name)}%20(${month}%20Bulan)%20sebesar%20${encodeURIComponent(formatRupiah(price))}.%20Mohon%20diproses.`;
    
    document.getElementById('btn-wa-confirm').onclick = () => window.open(waLink, '_blank');
    
    document.getElementById('btn-confirm-transfer').onclick = () => {
        // Simulate Success
        const statusBadge = document.querySelector('.status-badge');
        statusBadge.className = 'status-badge';
        statusBadge.style.background = 'rgba(0, 200, 83, 0.2)';
        statusBadge.style.color = '#00c853';
        statusBadge.style.borderColor = '#00c853';
        statusBadge.innerText = 'Pembayaran Diverifikasi';
        
        setTimeout(() => {
            alert("Terima kasih! Pesanan Anda sedang diproses. Cek WhatsApp untuk detail akun.");
            closeModal();
            // Reset badge
            statusBadge.className = 'status-badge waiting';
            statusBadge.style = '';
            statusBadge.innerText = 'Menunggu Pembayaran';
        }, 1500);
    };
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    clearInterval(paymentInterval);
}

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText.replace('Rp ', '').replace('.', '');
    navigator.clipboard.writeText(text).then(() => {
        alert('Nominal berhasil disalin!');
    });
}

// --- Animations & Effects ---

// Banner Slider
function startSlider() {
    const slider = document.getElementById('banner-slider');
    const images = slider.querySelectorAll('img');
    let index = 0;
    
    setInterval(() => {
        index = (index + 1) % images.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
}

// Fake Online Viewers
function startFakeViewer() {
    const viewerEl = document.getElementById('online-viewers');
    setInterval(() => {
        let current = parseInt(viewerEl.innerText);
        let change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        let newVal = current + change;
        if(newVal < 100) newVal = 100;
        viewerEl.innerText = newVal;
    }, 3000);
}

// Countdown Timer for Promo
function startCountdownTimer() {
    const timerEl = document.getElementById('timer');
    // Set end time to midnight
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    
    setInterval(() => {
        const current = new Date();
        const diff = end - current;
        
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        timerEl.innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}

// Fake Order Notifications
function startFakeOrders() {
    const names = ['Andi', 'Budi', 'Siti', 'Dewi', 'Rina', 'Agus', 'Doni', 'Putri'];
    const items = ['Netflix', 'Canva Pro', 'Youtube Premium', 'Spotify', 'ChatGPT'];
    const toast = document.getElementById('fake-toast');
    const msg = document.getElementById('toast-message');
    
    setInterval(() => {
        const name = names[Math.floor(Math.random() * names.length)];
        const item = items[Math.floor(Math.random() * items.length)];
        
        msg.innerText = `${name} baru saja membeli ${item}`;
        toast.classList.add('show');
        
        // Play sound (optional, browser might block autoplay)
        // document.getElementById('sound-click').play().catch(e => {});

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
        
    }, 15000); // Every 15 seconds
}
