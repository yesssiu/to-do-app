let tasks = [];

const addTask = () => { 
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = '';
        updateTasksList();
    }
}

const updateTasksList = () => { 
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        
    });
}

document.getElementById('newTask').addEventListener('click', function(e) {
    e.preventDefault();

    addTask();
});

//* tähän jäin: https://youtu.be/-oP7JK_rXUI?si=zRYWmPzDnNN53xk8&t=1481 minuutit: 24:41 *// 