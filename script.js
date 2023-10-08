const http = require("http");

const port = 8080; 
const tasks = [
  { id: 1, description: "Hacer comida", completed: false },
  { id: 2, description: "Estudiar JavaScript", completed: true },
  { id: 3, description: "Estudiar Python", completed: true },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
