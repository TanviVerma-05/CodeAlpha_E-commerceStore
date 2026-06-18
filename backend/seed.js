const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(async () => {

    await Product.deleteMany({});

    await Product.insertMany([
      {
        name: "iPhone 15",
        description: "Apple Smartphone",
        price: 79999,
        image: "/images/iphone15.jpg"
      },
      {
        name: "Samsung S25",
        description: "Samsung Flagship",
        price: 69999,
        image: "/images/samsungS25.jpg"
      },
      {
        name: "MacBook Air",
        description: "Apple Laptop",
        price: 99999,
        image: "/images/macbookAir.jpg"
      }
    ]);

    console.log("Products Inserted");

    process.exit();
  })
  .catch(err => console.log(err));