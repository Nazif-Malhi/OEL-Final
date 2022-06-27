const mongoose = require('mongoose');

const addTaskSchema = new mongoose.Schema({
    task:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true,
    },
    age:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    language:{
        type:String,
        require:true,
    },
    salary:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    }
});

const AddTaskModel = mongoose.model("addEmployee", addTaskSchema)
module.exports = AddTaskModel