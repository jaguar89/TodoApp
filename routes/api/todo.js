const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//create connection to DB
mongoose.connect(process.env.DBURL).catch((err) => console.log(err));

//create schema
const mySchema = new mongoose.Schema({ item: String });

//create Todo model
const Todo = mongoose.model("Todo", mySchema);

//create our router
const router = express.Router();

//handle request for all items
router.get("/", (req, res) => {
  Todo.find({}, (err, data) => {
    res.render("index", { data: data });
  });
});

//handle post request
router.post("/", (req, res) => {
  const item = new Todo({ item: req.body.item });
  item.save((err) => {
    if (err) console.log(err);
    res.redirect("/api/todo");
  });
});

//handle delete request
router.delete("/:item", (req, res) => {
   Todo.find({item:req.params.item.trim()}).deleteOne((err,data)=>{
       if(err) throw err;
       res.json(JSON.stringify(data));
   });
});

module.exports = router;
