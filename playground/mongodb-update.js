// Mongo client to connect to server
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// By calling /TodoApp we create the database without needing to do it formally within Mongo
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todo').findOneAndUpdate({
  //   _id: new ObjectID('598b232a9b72f954be524a8e')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // }) ;

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('598afbdff5d714aaa6c22203')
  }, {
    $set: {
      name: 'Jeff'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });
  //db.close();
});
