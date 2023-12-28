class Task {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  updateTask(index, task) {
    this.tasks[index] = task;
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
}

const taskList = new TaskList();

// Загрузка задач из localStorage
taskList.loadTasks();

// Добавление новой задачи
const task1 = new Task('Задача 1', 'выполняется');
taskList.addTask(task1);

// Изменение задачи
const task2 = new Task('Задача 2', 'выполняется');
taskList.updateTask(0, task2);

// Удаление задачи
taskList.deleteTask(0);

// Сохранение задач в localStorage
taskList.saveTasks();