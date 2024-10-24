const express = require('express');
const router = express.Router();

//Import Controller
const { createTodo } = require("../controllers/todo.controller.js")
const { getAllTodo , getTodoById } = require("../controllers/getAllTodo.controller.js")
const { updateTodo } = require("../controllers/updateTodo.controller.js")
const { deleteTodo } = require("../controllers/deleteTodo.controller.js")
//Define api Routes 
router.post('/createTodo', createTodo);
router.get('/allTodo' ,getAllTodo);
router.get('/singleTodo/:id', getTodoById);
router.put('/updateTodo/:id' , updateTodo );
router.delete('/deleteTodo/:id' , deleteTodo)

module.exports = router;