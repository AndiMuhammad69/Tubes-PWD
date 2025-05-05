// Daftar produk
const products = [
    {
        id: 1,
        name: "Sepatu Sport",
        price: 300000,
        image: "assets/images/sepatu1.jpg"
    },
    {
        id: 2,
        name: "Sneakers Keren",
        price: 250000,
        image: "assets/images/sepatu2.jpg"
    },
    {
        id: 3,
        name: "Sepatu Formal",
        price: 400000,
        image: "assets/images/sepatu3.jpg"
    }
];

// Tampilkan produk
const productList = document.getElementById("product-list");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="150"><br>
        <strong>${product.name}</strong><br>
        Harga: Rp${product.price.toLocaleString()}<br>
        <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
    `;

    productList.appendChild(productDiv);
});

