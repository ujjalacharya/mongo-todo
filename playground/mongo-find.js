var {MongoClient, ObjectID} = require('mongodb');


// Connection URL
var url = 'mongodb://localhost:27017/TodoApp';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log(err)
    }
    console.log("Connected correctly to server");

    db.collection('TodoApp').find().toArray().then((docs)=>{
        console.log("Todos")
        console.log(JSON.stringify(docs, undefined, 2));
    }, err=> console.log(err));

   
    db.close();
});