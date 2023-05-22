function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        var taskItem = document.createElement('li');
        taskItem.innerText = taskInput.value;
        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}
