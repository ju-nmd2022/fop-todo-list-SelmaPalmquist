const tasks = ["task 1", "task 2", "task 3"];
const taskListElement = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-button");

for (let task of tasks) {
  const taskElement = document.createElement("div");
  taskElement.innerHTML = task;

  taskElement.onclick = addToTaskList;

  taskListElement.appendChild(taskElement);
}

function addToTaskList () {
  console.log("I was clicked");
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