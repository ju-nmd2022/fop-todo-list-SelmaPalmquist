//followed the Fruit Shop example provided by Garrit Shaap on https://pixelkind.github.io/foundationsofprogramming/programming/ and https://www.youtube.com/watch?v=SeKQSQDUMDQ as well as ChatGPT as help for error checking
let taskListElement = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-button");
let taskList = [];

function displayDate () {
  let date = new Date()
  date = date.toString().split(" ");
  console.log(date);
  document.querySelector("#date").innerHTML = "Date:" + " " + date[1] + " " + date[2] + " " + date[3];
}

window.onload = function(){
  displayDate();
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

  const listElement = document.createElement("div");
  listElement.classList.add("task-list-element");

  const spanElement = document.createElement("span");
  spanElement.innerText = taskText;
  listElement.appendChild(spanElement);

   //remove button
   const removeButton = document.createElement("button");
   removeButton.innerText = "Remove";
   removeButton.classList.add("remove-button");
   removeButton.onclick = removeTask;
   listElement.appendChild(removeButton);
  
  //done button
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-button");
  doneButton.onclick = markTaskAsDone;
  listElement.appendChild(doneButton);

  taskListElement.appendChild(listElement);

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

