const { ObjectID } = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { Users } = require('../server/models/user');

// var id = '5991bc8973e52c144c74dd38';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   console.log(e)
// });
var id = '598ca7180c788df5cc70f4ed';

Users.findById('598ca7180c788df5cc70f4ed').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
