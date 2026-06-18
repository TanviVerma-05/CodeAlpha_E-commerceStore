const express = require("express");

const Order = require("../models/Order");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
