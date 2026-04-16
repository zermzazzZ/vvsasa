const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json()); // ✅ ត្រឹម

// routes
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});