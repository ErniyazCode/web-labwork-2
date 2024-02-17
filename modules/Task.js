const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
})

module.exports = new mongoose.model("Task", todoSchema)