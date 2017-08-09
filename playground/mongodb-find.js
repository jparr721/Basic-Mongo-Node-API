// Mongo client to connect to server
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// By calling /TodoApp we create the database without needing to do it formally within Mongo
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todo').find({}).toArray().then((docs) => {
  //   console.log('Todo');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });

  // db.collection('Todo').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch', err);
  // });

  db.collection('Users').find({name: 'Jarred'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch', err);
  });

  //db.close();
});
