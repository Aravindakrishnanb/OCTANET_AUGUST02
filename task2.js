const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTask');
const tasksList = document.getElementById('tasks');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        tasksList.appendChild(taskItem);
        newTaskInput.value = '';

        const deleteButton = taskItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });
    }
});