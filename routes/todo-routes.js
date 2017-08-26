const express = require('express');
const todoRoutes = express.Router();
const todosController = require('../controllers/todos-controller')

todoRoutes.get('/', todosController.index);
todoRoutes.post('/', todosController.create);

todoRoutes.get('/add', (req, res) => {
  res.render('todos/todo-add');
});

todoRoutes.put('/:id', todosController.update);
todoRoutes.get('/:id', todosController.show);
todoRoutes.delete('/:id', todosController.delete);




module.exports = todoRoutes;
