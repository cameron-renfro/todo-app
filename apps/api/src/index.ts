import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
