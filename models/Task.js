const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
name:String,
code:String,
cities:[
    {
        name:String
    }
]
})

module.exports = mongoose.model("Task", TaskSchema)