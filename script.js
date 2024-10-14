const tasks = ["task 1", "task 2", "task 3"];
const taskListElement = document.getElementById("task-list");
let taskCartElement = document.getElementById("task-cart");
//const addTaskButton = document.getElementById("add-button");


let taskList = [];

for (let task of tasks) {
  const taskElement = document.createElement("div");
  taskElement.innerText = task;
  taskListElement.appendChild(taskElement);
  taskElement.onclick = addToTaskList;
}

function addToTaskList () {
  taskList.push(this.innerText);

  const cartElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  cartElement.appendChild(spanElement);

  //remove button appears next to tasks in the list
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("remove-button");
  removeButton.onclick = removeTask;
  cartElement.appendChild(removeButton);

  
  //mark tasks as done
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-button");
  doneButton.onclick = markTaskAsDone;
  cartElement.appendChild(doneButton);

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



/*
function clickHandler(){
  const inputElement = document.getElementById("task-input");
  console.log("inputElement.value");
}

function loadHandler(){
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", clickHandler);

}
window.addEventListener("load", loadHandler);





    if (!task) {
      alert('Please write a task.');
      return;
    }


    <ul>
                    <li>Todo list</li>
                    <li class="checked">Web Dev project</li>
                    <li>Write 4 texts</li>
                    <li>Catch up on digital marketing</li>
                </ul>
                
                <div class="buttons">
                    <button class="del-button">Delete</button> 
                </div>     
    */