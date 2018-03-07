var {MongoClient} = require('mongodb');


// Connection URL
var url = 'mongodb://localhost:27017/TodoApp';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log(err)
    }
    console.log("Connected correctly to server");

    // db.collection('TodoApp').insertOne({
    //     name: "Ujjal",
    //     age: 21,
    //     taskCompleted: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection("Users").insertOne({
    //     name: "Adam",
    //     age: 32,
    //     profession: "singer",
    //     famous: true
    // }, (err, result)=>{
    //     if(err){return console.log(err)}
    //     console.log(JSON.stringify(result.ops, undefined, 5))
    // })

    db.close();
});