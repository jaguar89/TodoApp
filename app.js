const express = require("express");
const router = require("./routes/api/todo");
require("dotenv").config();

//create app
const app = express();

//handle submitted form's data
app.use(express.urlencoded({extended:false}));

//serve static files
app.use("/assets", express.static("assets"));

//set our router
app.use("/api/todo", router);

//set view template engine
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
//listen on port
app.listen(port, () => console.log(`server is running on port ${port}`));
