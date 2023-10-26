// Pon a prueba tus conocimientos sobre JavaScript aqui

// Selecionar el elemento input en el DOM con el id "taskInput"
const taskInput = document.querySelector("#taskInput");

// Selecionar el elemento button en el DOM con el id "addTaskButton"
const addTaskButton = document.querySelector("#addTaskButton");

// Selecionar el elemento ul en el DOM con el id "taskList"
const taskList = document.querySelector("#taskList");

//Crear un Array llamado "tasks" que contiene objetos que representam tareas
const tasks = []

// Añadir un event listener al button que escucha por "click" y ejecuta la funcion "addTask"
addTaskButton.addEventListener("click", addTask);

// Función que renderiza las tareas en el DOM
function renderTask() {

  let taskHTML = ""

  tasks.forEach((task) => {
    taskHTML += `
        <li>
					<article>
						<input type="checkbox" class="task-checkbox">
						<span class="task-text">Tarea 1</span>
					</article>
					<i class="fa fa-trash"></i>
				</li>
    `
  }) 

}


// Funcion que añade una tarea al array "tasks" y actualiza el DOM
function addTask() {
  const taskName = taskInput.value.trim()

  if (taskName === "") {
    alert("Por favor, introduce un nombre de tarea")
    return
  }

  const task = {
    id: Math.random(),
    name: taskName,
    completed: false
  }
  tasks.unshift(task)

  renderTask()
}
