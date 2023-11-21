// routes/index.js
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// home page -----------------------------------
router.get('/', (req, res) => {
  // get task array 
  const tasks = Task.getAllTasks();
  // render users page and send with obj 
  res.render('index', { title: 'Todo List', tasks }); // it will render users template file
});

// add new task
router.post('/add-task', (req, res) => {
  // exclude description of req.body
  const { description } = req.body; 
  // create an instance of new task
  const newTask = new Task(description); 
  // store to new task to the array
  Task.addTask(newTask);
  // after the adding redirect to the home page to reupdate task
  res.redirect('/');
});

// delete notes
router.get('/delete-task/:id', (req, res) => {
  // exclude id
  const { id } = req.params;
  // calling to deleteTask method to delete notes
  Task.deleteTask(parseInt(id));
  // redirect to home page
  res.redirect('/');
});

module.exports = router;

