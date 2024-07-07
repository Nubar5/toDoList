function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value;

    if (taskText !== '') {
        var taskList = document.getElementById('task-list');
        var listItem = document.createElement('div');

        listItem.innerHTML = `<p class="input-data">${taskText}</p>`
            + '<button onclick="deleteTask(this)" class="new-button"><i class="fa-solid fa-trash"></i></button>'
            + '<button onclick="editTask(this)" class="new-button"><i class="fas fa-edit"></i></button>';


        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    var listItem = button.parentElement;
    listItem.parentElement.removeChild(listItem);
}


function editTask(button) {
    var listItem = button.parentElement;
    var taskElement = listItem.querySelector('.input-data');
    var taskText = taskElement.innerText;

    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = taskText;
    inputField.className = 'edit-input';

    inputField.onkeydown = function (event) {
        if (event.key === 'Enter') {
            taskElement.innerText = inputField.value;
            taskElement.style.display = 'block';
            inputField.remove();
        }
    };

    inputField.onblur = function () {
        taskElement.innerText = inputField.value;
        taskElement.style.display = 'block';
        inputField.remove();
    };

    taskElement.style.display = 'none';
    listItem.insertBefore(inputField, taskElement);
    inputField.focus();
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}
