const tasks = ["task 1", "task 2", "task 3"];
const taskListElement = document.getElementById("task-list");
let taskCartElement = document.getElementById("task-cart");

let taskList = [];


for (let task of tasks) {
  const taskElement = document.createElement("div");
  taskElement.innerText = task;
  taskListElement.appendChild(taskElement);
  taskElement.onclick = addToTaskList;

}

function addToTaskList () {
  console.log("I was clicked");
  taskCartElement.appendChild(this);
}


 //doneButtonElement.onclick = markTaskAsDone;
//const addTaskButton = document.getElementById("add-button");
/*
function markTaskAsDone () {
  taskListElement.style.textDecoration = "line-through";
  console.log("Task is marked as done.");
}
*/

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