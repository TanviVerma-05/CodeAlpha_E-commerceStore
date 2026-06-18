const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.send("E-Commerce Backend Running");
// });

app.use(
  express.static(
    path.join(__dirname, "../frontend")
  )
);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});