// Ambil keranjang dari localStorage (jika ada)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Tambah produk ke keranjang
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const inCart = cart.find(item => item.id === id);

    if (inCart) {
        inCart.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    renderCart();
}

// Hapus produk dari keranjang
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

// Simpan keranjang ke localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Proses checkout
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang kosong!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    alert(`Terima kasih telah berbelanja!\nTotal belanja: Rp${total.toLocaleString()}`);

    cart = [];
    saveCart();
    renderCart();
}

// Tampilkan isi keranjang
function renderCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";

    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Keranjang kosong</p>";
        return;
    }

    cart.forEach(item => {
        const el = document.createElement("div");
        el.innerHTML = `
            ${item.name} - Rp${item.price.toLocaleString()} x ${item.qty}
            <button onclick="removeFromCart(${item.id})">Hapus</button>
        `;
        cartDiv.appendChild(el);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const totalDiv = document.createElement("p");
    totalDiv.innerHTML = `<strong>Total: Rp${total.toLocaleString()}</strong>`;
    cartDiv.appendChild(totalDiv);

    const checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "Checkout";
    checkoutBtn.onclick = checkout;
    cartDiv.appendChild(checkoutBtn);
}

// Render saat halaman pertama kali dibuka
renderCart();