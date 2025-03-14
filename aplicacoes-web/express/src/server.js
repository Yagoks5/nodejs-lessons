const express = require("express");
const server = express();

server.get("/", (request, response) => {
  response.send("Servidor Express funcionando!\n Você está na página inicial");
});

server.get("/artigos", (req, res) => {
  res.send("Página artigos feito pelo express");
});

const PORT = 1997;

server.listen(PORT, () => {
  console.log(`Servidor Express iniciando em http://localhost:${PORT}`);
});
