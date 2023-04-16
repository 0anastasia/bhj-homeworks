let taskInput = document.getElementById('task__input');
let tasksAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

let addingTask = () => {
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        )
        taskInput.value = '';     
}

let remove = () => {
  let taskRemove = Array.from(tasksList.children);
    taskRemove.forEach(el => {el.lastElementChild.addEventListener('click', e => {
        e.preventDefault();
        if(taskRemove.length > 0) {
            e.target.closest('.task').remove()
        }
        
    })})
}

let tasksAddButton = () => {tasksAdd.addEventListener('click', (event) => {
    if (taskInput.value.trim().length > 0) {
        event.preventDefault();
        addingTask() 
    }
    remove();
  })
}
tasksAddButton();
