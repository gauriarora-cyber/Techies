const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dummy register endpoint
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log("User registered:", { name, email, password });
  res.status(200).json({ success: true });
});

// Dummy login check
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Temporary hardcoded user
  if (email === "test@example.com" && password === "123456") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
