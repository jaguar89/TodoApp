const mongoose = require("mongoose");

//create todo schema
const TodoSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//create Todo model
const Todo = mongoose.model("Todo", TodoSchema);

//export our model
module.exports = Todo;
