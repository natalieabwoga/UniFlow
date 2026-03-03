const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send({ message: "UniFlow API running", dbTime: result.rows[0] });
  } catch (err) {
    console.error("Database connection error:", err);
    res.status(500).send("Database connection error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`UniFlow backend running on port ${PORT}`);
});