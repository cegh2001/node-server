const readline = require('readline-sync');

// Array para almacenar las tareas
const tasks = [];

// Función para mostrar la lista de tareas
function showTasks() {
  if (tasks.length === 0) {
    console.log('La lista de tareas está vacía.');
  } else {
    console.log('Lista de tareas:');
    tasks.forEach((task, index) => {
      const status = task.completed ? '[Completada]' : '[Pendiente]';
      console.log(`${index + 1}. ${status} ${task.description}`);
    });
  }
}

// Función para agregar una nueva tarea
function addTask() {
  const description = readline.question('Ingrese la descripción de la tarea: ');
  tasks.push({ description, completed: false });
  console.log('Tarea agregada.');
}

// Función para eliminar una tarea
function deleteTask() {
  showTasks();
  const taskIndex = readline.questionInt('Ingrese el número de la tarea que desea eliminar: ') - 1;

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Número de tarea no válido.');
  }
}

// Función para marcar una tarea como completada
function completeTask() {
  showTasks();
  const taskIndex = readline.questionInt('Ingrese el número de la tarea que desea marcar como completada: ') - 1;

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].completed = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Número de tarea no válido.');
  }
}

// Menú de opciones
while (true) {
  console.log('\nOpciones:');
  console.log('1. Mostrar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Marcar tarea como completada');
  console.log('5. Salir');

  const choice = readline.questionInt('Ingrese el número de la opción que desea ejecutar: ');

  switch (choice) {
    case 1:
      showTasks();
      break;
    case 2:
      addTask();
      break;
    case 3:
      deleteTask();
      break;
    case 4:
      completeTask();
      break;
    case 5:
      process.exit(0);
    default:
      console.log('Opción no válida.');
  }
}
