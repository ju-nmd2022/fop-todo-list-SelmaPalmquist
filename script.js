//followed the Fruit Shop example provided by Garrit Shaap on https://pixelkind.github.io/foundationsofprogramming/programming/ and 
//https://www.youtube.com/watch?v=SeKQSQDUMDQ and https://www.w3schools.com/jsref/prop_win_localstorage.asp  
//for help with localStorage as well as ChatGPT as help for error checking
const taskListElement = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-button");
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function displayDate () {
  let date = new Date()
  date = date.toString().split(" ");
  console.log(date);
  document.querySelector("#date").innerHTML = "Date:" + " " + date[1] + " " + date[2] + " " + date[3];
}

window.onload = function(){
  displayDate();
  loadTasks();
}

addTaskButton.addEventListener("click", addToTaskList);

function addToTaskList(event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  //if tasktext is nonexsistent an alert is given
  if(taskText === "") {
    alert("Please enter a task.")
    return;
  }

  //creates an object named task with the properties text and done
  const task = {
    text: taskText,
    done: false
  };

  //adds task object to the array taskList
  taskList.push(task);
  saveTasksInLocalStorage();

  readTask(task);

  //clear the taskform after submission
  taskInput.value = "";
}

function readTask(task) {
  const listElement = document.createElement("div");
  listElement.classList.add("task-list-element");

  const spanElement = document.createElement("span");
  spanElement.innerText = task.text;
  listElement.appendChild(spanElement);

   if (task.done) {
    spanElement.style.textDecoration = "line-through";
  }

   //remove button
   const removeButton = document.createElement("button");
   removeButton.innerText = "Remove";
   removeButton.classList.add("remove-button");
   removeButton.onclick = function() {
    removeTasksFromLocalStorage(task, listElement);
   };
   listElement.appendChild(removeButton);
  
  //done button
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-button");
  doneButton.onclick = function() {
    markTaskAsDone(task, spanElement);
  };
  listElement.appendChild(doneButton);

  taskListElement.appendChild(listElement);
}

//reads every individual task from the taskList
function loadTasks(){
  taskList.forEach(task => {
    readTask(task);
  });
}

//save the tasks in local storage, as the name suggests
function saveTasksInLocalStorage(){
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

//remove the tasks from local storage, as the name suggests
function removeTasksFromLocalStorage(task, element){
  taskList = taskList.filter(t => t.text !== task.text);
  element.remove();
  saveTasksInLocalStorage();
}

//function that strikes out the text on click of done button, if its not already, and vice versa
function markTaskAsDone(task, spanElement) {
  task.done = !task.done;
  if (task.done) {
    spanElement.style.textDecoration = "line-through";
  } else {
    spanElement.style.textDecoration = "none";
  }

  saveTasksInLocalStorage(); 
}


