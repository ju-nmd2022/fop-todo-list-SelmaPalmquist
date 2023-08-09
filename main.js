
let taskBar = document.getElementById("new-task-form");
let taskInput = document.getElementById("new-task-input");
let listed = document.getElementById("tasks");
let addButton = document.getElementById("new-task-submit");


//function get storage
getTaskStorage(taskListMemory);

//function listen for click on "add task" button
addButton.addEventListener('click', () =>{
    if(inputTask.value.length > 0){
        newTask("", taskInput.value, false, false);
        clearInputText();
}});

//function clear input text
function clearInputText(){
    taskInput.value="";
}

function newTask(){
    const taskElement = createTaskElement(task);
    listElement.appendChild(taskElement);
    saveTask(task);
}

function saveTask(task) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  }


/*
window.addEventListener('load', () => {
  const taskbar = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const listElement = document.querySelector('#tasks');

  function initializeTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTask(task));
  }

  function addTask(task) {
    const taskElement = createTaskElement(task);
    listElement.appendChild(taskElement);
    saveTask(task);
  }

  function saveTask(task) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  }

  function deleteTask(taskElement) {
    const task = taskElement.querySelector('.text').value;
    listElement.removeChild(taskElement);
    removeTaskFromStorage(task);
  }

  function removeTaskFromStorage(task) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = savedTasks.filter(savedTask => savedTask !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskContentElement = document.createElement('div');
    taskContentElement.classList.add('content');
    taskElement.appendChild(taskContentElement);

    const taskInputElement = document.createElement('input');
    taskInputElement.classList.add('text');
    taskInputElement.type = 'text';
    taskInputElement.value = task;
    taskInputElement.setAttribute('readonly', 'readonly');
    taskContentElement.appendChild(taskInputElement);

    const taskActionsElement = document.createElement('div');
    taskActionsElement.classList.add('actions');
    taskElement.appendChild(taskActionsElement);

    const taskEditElement = document.createElement('button');
    taskEditElement.classList.add('edit');
    taskEditElement.innerHTML = 'Edit';
    taskActionsElement.appendChild(taskEditElement);

    const taskDeleteElement = document.createElement('button');
    taskDeleteElement.classList.add('delete');
    taskDeleteElement.innerHTML = 'Delete';
    taskActionsElement.appendChild(taskDeleteElement);

    taskEditElement.addEventListener('click', () => {
      if (taskEditElement.innerText.toLowerCase() === 'edit') {
        taskInputElement.removeAttribute('readonly');
        taskInputElement.focus();
        taskEditElement.innerText = 'Save';
      } else {
        taskInputElement.setAttribute('readonly', 'readonly');
        taskEditElement.innerText = 'Edit';
      }
    });

    taskDeleteElement.addEventListener('click', () => {
      deleteTask(taskElement);
    });

    return taskElement;
  }

  taskbar.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert('Please write a task.');
      return;
    }

    addTask(task);
    input.value = '';
  });

  initializeTasks();
});



*/
    


 