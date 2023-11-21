// models/task.js
const tasks = [];

class Task {
    constructor(description) {
        this.id = tasks.length + 1;
        this.description = description; 
    }

    static getAllTasks() {
        return tasks;
    }

    static addTask(task) {
        tasks.push(task);
    }

    static deleteTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
    }
}

module.exports = Task;
