//followed the Fruit Shop example provided by Garrit Shaap on https://pixelkind.github.io/foundationsofprogramming/programming/ 
const tasks = [];
const taskListElement = document.getElementById("task-list");
let taskCartElement = document.getElementById("task-cart");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-button");

let taskList = [];

for (let task of tasks) {
  const taskElement = document.createElement("div");
  taskElement.innerText = task;
  taskListElement.appendChild(taskElement);
}

addTaskButton.addEventListener("click", addToTaskList);

function addToTaskList(event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if(taskText === "") {
    alert("Please enter a task.")
    return;
  }

  taskList.push(taskText);

  const cartElement = document.createElement("div");
  cartElement.classList.add("task-list");

  const spanElement = document.createElement("span");
  spanElement.innerText = taskText;
  cartElement.appendChild(spanElement);
  
  //done button
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-button");
  doneButton.onclick = markTaskAsDone;
  cartElement.appendChild(doneButton);

  //remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("remove-button");
  removeButton.onclick = removeTask;
  cartElement.appendChild(removeButton);

  taskCartElement.appendChild(cartElement);

  //clear the taskform after submission
  taskInput.value = "";
}

function markTaskAsDone() {
  const taskElement = this.parentNode.querySelector("span");
  if (taskElement.style.textDecoration === "line-through") {
    taskElement.style.textDecoration = "none";
  } else {
    taskElement.style.textDecoration = "line-through";
  }
}

function removeTask() {
  const element = this.parentNode; 
  element.parentNode.removeChild(element); 
}



/*
//followed the Fruit Shop example provided by Garrit on https://pixelkind.github.io/foundationsofprogramming/programming/ 
const tasks = ["task 1"];
const taskListElement = document.getElementById("task-list");
let taskCartElement = document.getElementById("task-cart");
const taskForm = document.getElementById("task-form");
const addTaskButton = document.getElementById("add-button");

let taskList = [];

for (let task of tasks) {
  const taskElement = document.createElement("div");
  taskElement.innerText = task;
  taskListElement.appendChild(taskElement);
  addTaskButton.onclick = addToTaskList;
}

function addToTaskList () {
  event.preventDefault();
  taskList.push(this.innerText);

  const cartElement = document.createElement("div");
  cartElement.classList.add("task-list");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  cartElement.appendChild(spanElement);
  
  //mark tasks as done
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-button");
  doneButton.onclick = markTaskAsDone;
  cartElement.appendChild(doneButton);

  //remove button appears next to tasks in the list
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("remove-button");
  removeButton.onclick = removeTask;
  cartElement.appendChild(removeButton);


  taskCartElement.appendChild(cartElement);

  
}

function removeTask () {
  const element = this.parentNode; 
  element.parentNode.removeChild(element); 
}

function markTaskAsDone () {
  const taskElement = this.parentNode.querySelector("span");
  if (taskElement.style.textDecoration === "line-through") {
    taskElement.style.textDecoration = "none";
  } else {
    taskElement.style.textDecoration = "line-through";
  }
}







 if (task) {
    addToTaskList(task); 
    taskInput.value = "";
  } else {
    alert('Please write a task.');
      return;
  }

    */






  