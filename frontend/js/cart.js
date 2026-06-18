const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDiv = document.getElementById("cart");

let total = 0;

async function loadCart() {
  const products = await fetch("http://localhost:5000/api/products").then(
    (res) => res.json(),
  );

  cart.forEach((item) => {
    const product = products.find((p) => p._id === item.productId);

    if (!product) return;

    total += product.price * item.quantity;

    cartDiv.innerHTML += `
      <div>
        <h3>${product.name}</h3>

        <p>
          Quantity:
          ${item.quantity}
        </p>

        <p>
          ₹${product.price}
        </p>
        <button onclick="removeFromCart('${product._id}')">
          Remove
        </button>
      </div>
      <hr>
    `;
  });

  document.getElementById("total").innerText = `Total: ₹${total}`;
}

loadCart();

document.getElementById("checkout")
.addEventListener("click", async () => {

    const token =
    localStorage.getItem("token");

    if (!token) {
        alert("Please login first");
        return;
    }

    const order = {
        products: cart,
        totalPrice: total
    };

    const res = await fetch(
        "http://localhost:5000/api/orders",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
            body: JSON.stringify(order)
        }
    );

    const data = await res.json();

    console.log(data);

    alert("Order Placed");

    localStorage.removeItem("cart");
});

function removeFromCart(productId){

    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    if(cart.length === 0){

    cartDiv.innerHTML =
    "<h3>Your cart is empty</h3>";

    document.getElementById(
        "checkout"
    ).style.display = "none";

    return;
}

    cart = cart.filter(
        item => item.productId !== productId
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}
