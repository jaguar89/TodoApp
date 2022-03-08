const Todo = require("../models/todo");

//get all todos
const todo_index = (req, res) => {
  Todo.find().then((doc) => {
    res.render("index", { data: doc });
  });
};

//insert new todo
const todo_post = (req, res) => {
  Todo.create(req.body).then((doc) => {
    res.redirect("/todos");
  });
};

//delete todo 
const todo_delete = (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then((doc) => { 
    res.json(doc);
  });
};

module.exports = {
  todo_index,
  todo_post,
  todo_delete,
};
