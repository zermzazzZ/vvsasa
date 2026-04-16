const express = require("express");
const router = express.Router();

// 🔐 Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    return res.json({ message: "Login success ✅" });
  } else {
    return res.status(401).json({ message: "Wrong username or password ❌" });
  }
});

// 🛒 Order
router.post("/order", (req, res) => {
  const { user, cart, total, address } = req.body;

  console.log("New Order:", { user, cart, total, address });

  res.json({ message: "Order saved ✅" });
});

module.exports = router;