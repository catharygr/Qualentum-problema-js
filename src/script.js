// Pon a prueba tus conocimientos sobre JavaScript aqui

// Selecionar el elemento input en el DOM con el id "taskInput"
const taskInput = document.querySelector("#taskInput");
// Selecionar el elemento button en el DOM con el id "addTaskButton"
const addTaskButton = document.querySelector("#addTaskButton");
// Selecionar el elemento ul en el DOM con el id "taskList"
const taskList = document.querySelector("#taskList");
//Crear un Array llamado "tasks" que contiene objetos que representam tareas
let tasks = [];
// Añadir un event listener al button que escucha por "click" y ejecuta la funcion "addTask"
addTaskButton.addEventListener("click", addTask);

// Funcion que añade una tarea al array "tasks"
function addTask() {
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Por favor, introduce un nombre de tarea");
    return;
  }
  // Creando un objeto que representa una tarea
  const task = {
    id: Math.random().toString(),
    name: taskName,
    completed: false,
  };
  // Añadiendo la tarea al array "tasks" al principio del array
  tasks.unshift(task);

  // Limpiando el input
  taskInput.value = "";

  // Renderizando las tareas con la funcion "renderTask" pasándole el array "tasks" como argumento
  renderTask(tasks);
}

// Función que añade un event listener a los checkboxes
function addEventListenersToCheckboxes() {
  // Seleccionando todos los checkboxes
  const checkboxes = taskList.querySelectorAll(".task-checkbox");
  // Iterando sobre los checkboxes y añadiendo un event listener a cada uno que escuchará por "change" y encontrará la tarea correspondiente en el array "tasks" y cambiará su propiedad "completed" a true o false dependiendo del estado del checkbox
  checkboxes.forEach((item) => {
    item.addEventListener("change", (event) => {
      const findTask = tasks.find((task) => task.id === event.target.id);
      findTask.completed = event.target.checked;
    });
  });
}

// Crear function que añade un event listener a los iconos de la papelera
function addEventListenersToPapelera() {
  const iconosPapelera = taskList.querySelectorAll(".fa-trash");
  iconosPapelera.forEach((item) => {
    item.addEventListener("click", (event) => {
      const newTasks = tasks.filter((task) => event.target.id !== task.id);
      tasks = newTasks;
      renderTask(tasks);
    });
  });
}

// Función que recibe el array de tareas y las renderiza en el DOM
// También es un ejemplo de hoisting, ya que la función se puede llamar antes de ser declarada
function renderTask(tasks) {
  let taskHTML = "";

  // Iterando sobre el array "tasks" y creando un string con el HTML de cada tarea
  // Esto es un ejemplo de scope, la variable "tasks" existe tanto fuera como dentro de la función pero la que se usa es la que llega como parametro
  tasks.forEach((task) => {
    taskHTML += `
        <li>
          <article>
            <input id=${task.id} ${
      task.completed ? "checked" : ""
    } type="checkbox" class="task-checkbox">
            <span class="task-text">${task.name}</span>
          </article>
          <i id=${task.id} class="fa fa-trash"></i>
        </li>
    `;
  });
  taskList.innerHTML = taskHTML;
  addEventListenersToCheckboxes();
  addEventListenersToPapelera();
}
