 window.addEventListener('load', () =>{
    let taskbar = document.querySelector('#new-task-form');
    let actualtask = document.querySelector('#new-task-input');
    let list = document.querySelector('#tasks');
    
    taskbar.addEventListener('submit', (e) =>{
        e.preventDefault();
    
        let task = actualtask.value;
    
        if (!task){
            alert("Please write a task.");
            return;
        }
    })
        
    })