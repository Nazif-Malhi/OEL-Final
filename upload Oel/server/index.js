const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const AddTaskModel = require("./Model/AddTask");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Nazif:Z7P8QDBCJG6Qbra@clusternm.fa3sj.mongodb.net/AddEmployee?retryWrites=true&w=majority", {
    useNewUrlParser:true,
});

app.post('/insert', async (req, res) =>{
    const task = req.body.task
    const role = req.body.role
    const age = req.body.age
    const phone = req.body.phone
    const address = req.body.address
    const gender = req.body.gender
    const language = req.body.language
    const salary = req.body.salary
    const addTask = new AddTaskModel({
        task: task,
        role:role,
        age,
        phone,
        address,
        gender,
        language,
        salary
    });
    console.log(task);
    try {
        await addTask.save();
        res.send('inserted Data');
    } catch (error) {
        console.log(error);
    }
})

app.get('/read', async(req, res) => {
    AddTaskModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
})


app.listen(8001 , () => {
    console.log("Server running on 8001...")
});
