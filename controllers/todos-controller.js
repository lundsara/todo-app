const Todo = require('../models/todos');

const todosController = {};

todosController.index = (req, res) => {
  Todo.findAll()
    .then(todos => {
      res.render('todos/todo-index',{
        message: 'ok',
        data: todos,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
todosController.show = (req, res) => {
  Todo.findById(req.params.id)
    .then(todos => {
      res.render('todos/todo-info',{
        message: 'ok',
        data: todos,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};
todosController.create = (req, res) => {
  Todo.create({
      title: req.body.title,
      status: req.body.status,
      category: req.body.category,
     }).then(() => {
    // so did this one
    res.redirect('/todos');
    // res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.update = (req, res) => {
  Todo.update({
      title: req.body.titles,
      status: req.body.status,
      category: req.body.category,
  }, req.params.id).then(todo => {
    res.json({
      message: 'Todo updated successfully!',
      data: todos,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.delete = (req, res) => {
  Todo.destroy(req.params.id)
    .then(() => {
      res.redirect('/todos');


    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}


module.exports = todosController;
