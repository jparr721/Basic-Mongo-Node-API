// Mongo client to connect to server
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// By calling /TodoApp we create the database without needing to do it formally within Mongo
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todo').deleteMany({text: 'Eat food'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todo').deleteOne({text: 'Eat food'}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todo').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

  //db.close();
});
