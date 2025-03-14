const express = require("express");
const path = require("node:path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const PORT = 1997;
app.listen(PORT, () => {
  console.log("Servidor iniciado");
});
