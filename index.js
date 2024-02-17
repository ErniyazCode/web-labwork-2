const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost/todoData")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use(require("./routes/routes")); 
app.use(require("./routes/todos")); 

app.listen(3000, () => console.log("Server is listening"));
