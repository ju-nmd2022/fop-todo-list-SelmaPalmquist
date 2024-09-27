document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-button');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  const addTask = () => {
      const taskText = taskInput.value;

      if (taskText === "") {
          alert("Please enter a task");
          return;
      }

      // Create a new list item for the task
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-task">Delete</button>
      `;
      
      // Add a click event to toggle the 'complete' class
      taskItem.querySelector('span').addEventListener('click', function() {
          this.classList.toggle('complete');
      });

      // Add a click event to delete the task
      taskItem.querySelector('.delete-task').addEventListener('click', function() {
          taskItem.remove();
      });

      // Append the task to the list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
  };

  // Add task when the button is clicked
  addTaskButton.addEventListener('click', addTask);

  // Optionally: Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTask();
      }
  });
});



/*const form = document.querySelector('#submitTask');
const input = document.querySelector('input');


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