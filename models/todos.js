const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
  return db.query('SELECT * FROM todos');
}

Todo.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM todos
    WHERE id = $1
  `, [id]);
}
Todo.create = todos => {
  return db.one(
    `
      INSERT INTO todos
      (title, status, category)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    [todos.title, todos.status, todos.category]
  );
};
Todo.update = (todo, id) => {
  return db.one(`
    UPDATE todos SET
    title = $1,
    status = $2,
    category = $3
    WHERE id = $4
    RETURNING *
  `, [todo.title, todo.status, todo.category, id]);
}
Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todos
    WHERE id = $1
  `, [id]);
}



module.exports = Todo;
