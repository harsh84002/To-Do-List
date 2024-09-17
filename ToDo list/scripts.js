document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') return;

        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-task';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);

        li.addEventListener('click', () => {
            span.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
