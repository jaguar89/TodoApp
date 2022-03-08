const express = require("express"); 
const mongoose = require("mongoose");
require("dotenv").config();

//create app
const app = express();

//connecting to MongoDB 
mongoose.connect(process.env.MONGO_URL)
.then(res => {
    console.log('Connected to DB');
    //listen on port
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`server is running on port ${port}...`));
})
.catch((err) => console.log(err));

//handle submitted form's data
app.use(express.urlencoded({extended:false}));

//serve static files
app.use("/assets", express.static("assets"));

//redirect from localhost
app.get('/' , (req,res) => res.redirect('/todos'));

//set our router
app.use("/todos", require('./routes/todos'));

//set view template engine
app.set("view engine", "ejs");