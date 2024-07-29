const input = document.querySelector('input');
const button = document.querySelector('.btn-add');
const list = document.querySelector('ul');
const emptyMessage = document.querySelector('.empty p');

class Task {
    constructor(text) {
        this.text = text;
    }

    pintarTask(domElement) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = this.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('btn-delete');

        deleteButton.addEventListener('click', () => {
            domElement.removeChild(li);
        });

        li.appendChild(p);
        li.appendChild(deleteButton);
        domElement.appendChild(li);
    }
}

class Lista {
    constructor() {
        this.tasks = [];
    }

    agregarTask(task) {
        this.tasks.push(task);
        this.updateEmptyMessage();
    }

    pintarTasks(domElement) {
        domElement.innerHTML = '';
        for (let task of this.tasks) {
            task.pintarTask(domElement);
            this.updateEmptyMessage();
        }
    }
    updateEmptyMessage() {
        if (this.tasks.length === 0) {
            emptyMessage.textContent = 'All tasks are completed';
        } else {
            emptyMessage.textContent = '';
        }
    }
}

const lista = new Lista();

button.addEventListener('click', (event) => {
    event.preventDefault();

    const taskText = input.value;

    if (taskText !== '') {
        const newTask = new Task(taskText);
        lista.agregarTask(newTask);
        lista.pintarTasks(list);
        input.value = '';
    }
});

lista.updateEmptyMessage();

