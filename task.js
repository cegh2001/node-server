const express = require("express");
const app = express();

const port = 8080;
const tasks = [
  { id: 1, description: "Hacer comida", completed: false },
  { id: 2, description: "Estudiar JavaScript", completed: true },
  { id: 3, description: "Estudiar Python", completed: true },
];

// Definir una ruta para obtener tareas
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// Ruta de manejo de 404
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
