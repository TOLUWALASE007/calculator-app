const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON bodies

// --- Calculator logic ---
function calculate(a, b, op) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "multiply": return a * b;
    case "divide":
      if (b === 0) return { error: "Math error" };
      return a / b;
    default: return { error: "Invalid operation" };
  }
}

// --- Routes ---
app.get("/", (req, res) => {
  res.send("Calculator API is running ✅");
});

app.post("/calculate", (req, res) => {
  const { a, b, op } = req.body;

  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "Inputs must be numbers" });
  }

  const result = calculate(numA, numB, op);
  if (typeof result === "object" && result.error) {
    return res.status(400).json(result);
  }

  res.json({ result });
});

// --- Start server ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ API running at http://localhost:${PORT}`);
});
