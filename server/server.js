const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");
const app = express();
const PORT = process.env.PORT || 3000;

const {mongoose}= require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user")

 
// parse application/json
app.use(bodyParser.json());

app.get("/todos", (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    }, (err)=>{
        res.status(400).send(err)
    })  
})

app.post("/todos",(req, res) =>{
    let newTodo = new Todo({
        text: req.body.text
    })
    newTodo.save().then((doc)=>{
        res.send(doc)
    }, (err)=>{
        res.status(400).send(err);
    })
})

app.get("/todos/:id", (req, res)=>{
    let id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }  


Todo.findById(id).then((todo)=>{
    if(!todo){
        return res.status(400).send();
    }
    res.send({todo})
}).catch((e)=>{
    res.status(400)
})
})

app.listen(PORT, ()=>{
    console.log("App being run on port")
})