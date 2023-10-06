const readline = require("readline-sync");

// Array para almacenar las tareas
const tasks = [];

// Función para mostrar la lista de tareas
function showTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (tasks.length === 0) {
        console.log("La lista de tareas está vacía.");
      } else {
        console.log("Lista de tareas:");
        tasks.forEach((task, index) => {
          const status = task.completed ? "[Completada]" : "[Pendiente]";
          console.log(`${index + 1}. ${status} ${task.description}`);
        });
      }
      resolve();
    }, 1000); // Simulación de retardo
  });
}

// Función para agregar una nueva tarea
function addTask(description) {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push({ description, completed: false });
      console.log("Tarea agregada.");
      resolve();
    }, 1000); // Simulación de retardo
  });
}

// Función para eliminar una tarea
function deleteTask(taskIndex) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
        console.log("Tarea eliminada.");
        resolve();
      } else {
        reject("Número de tarea no válido.");
      }
    }, 1000); // Simulación de retardo
  });
}

// Función para marcar una tarea como completada
function completeTask(taskIndex) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        console.log("Tarea marcada como completada.");
        resolve();
      } else {
        reject("Número de tarea no válido.");
      }
    }, 1000); // Simulación de retardo
  });
}

// Función principal
async function main() {
  while (true) {
    console.log("\nOpciones:");
    console.log("1. Mostrar tareas");
    console.log("2. Agregar tarea");
    console.log("3. Eliminar tarea");
    console.log("4. Marcar tarea como completada");
    console.log("5. Salir");

    const choice = readline.questionInt(
      "Ingrese el número de la opción que desea ejecutar: "
    );

    switch (choice) {
      case 1:
        await showTasks();
        break;
      case 2:
        const description = readline.question(
          "Ingrese la descripción de la tarea: "
        );
        await addTask(description);
        break;
      case 3:
        const deleteIndex =
          readline.questionInt(
            "Ingrese el número de la tarea que desea eliminar: "
          ) - 1;
        try {
          await deleteTask(deleteIndex);
        } catch (error) {
          console.log(error);
        }
        break;
      case 4:
        const completeIndex =
          readline.questionInt(
            "Ingrese el número de la tarea que desea marcar como completada: "
          ) - 1;
        try {
          await completeTask(completeIndex);
        } catch (error) {
          console.log(error);
        }
        break;
      case 5:
        process.exit(0);
      default:
        console.log("Opción no válida.");
    }
  }
}

main();
