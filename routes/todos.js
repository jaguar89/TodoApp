const express = require("express"); 
const todoController = require('../controllers/todoController');

//create our router
const router = express.Router();

//handle request for all items
router.get("/", todoController.todo_index);

//handle post request
router.post("/", todoController.todo_post);

//handle delete request
router.delete("/:id", todoController.todo_delete);

module.exports = router;
