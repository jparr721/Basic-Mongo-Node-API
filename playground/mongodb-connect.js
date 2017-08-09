// Mongo client to connect to server
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// By calling /TodoApp we create the database without needing to do it formally within Mongo
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // You can name the collection whatever and it will be auto created
  // db.collection('Todo').insertOne({
  //   text: 'things',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Error: ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into users(name, age location)
  // db.collection('Users').insertOne({
  //   name: 'Jarred',
  //   age: 20,
  //   location: 'Allendale, MI'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Error: ', err);
  //   }
  //   console.log(result.ops);
  // });

  db.close();
});
