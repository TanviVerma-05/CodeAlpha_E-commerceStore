fetch("http://localhost:5000/api/products")
  .then((res) => res.json())
  .then((products) => {
    const div = document.getElementById("products");

    products.forEach((product) => {
      div.innerHTML += `
        <div class="product-card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <a href="/product.html?id=${product._id}">
                View Details
            </a>

            <br><br>

            <button onclick="addToCart('${product._id}')">
                Add To Cart
            </button>

        </div>
        `;
    });
  });

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.productId === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}
