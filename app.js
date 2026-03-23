const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API rodando com sucesso",
    status: "ok"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    health: "healthy"
  });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Aleff" },
    { id: 2, name: "Daniel" }
  ]);
});

app.post("/echo", (req, res) => {
  res.json({
    received: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});