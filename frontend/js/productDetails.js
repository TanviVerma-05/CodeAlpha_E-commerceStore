const params =
new URLSearchParams(window.location.search);

const id = params.get("id");

fetch(
`http://localhost:5000/api/products/${id}`
)
.then(res=>res.json())
.then(product=>{

    document.getElementById("product")
    .innerHTML=`
        <img src="${product.image}" width="250">

        <h2>${product.name}</h2>

        <p>${product.description}</p>

        <h3>₹${product.price}</h3>
    `;
});