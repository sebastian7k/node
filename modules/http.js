const http = require("http");

const port = 8080;

const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    request.writeHead(200, { "Content-Type": "text/html" });
    request.readableEnded("<h1> home page </h1>");
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
