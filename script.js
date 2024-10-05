const tasks = [];
const taskListElement = document.getElementById("task-list");

for (let task of tasks) {
  const taskElement = document.createElement("div");
  taskElement.innerHTML = task;

  const addTaskElement = document.getElementById("add-button");
  addtaskElement.onclick

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