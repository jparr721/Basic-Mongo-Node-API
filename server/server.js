const express = require('express');
var bodyParser = require('body-parser');
const {
  ObjectID
} = require('mongodb');

var {
  mongoose
} = require('./db/mongoose');
var {
  Todo
} = require('./models/todo');
var {
  Users
} = require('./models/user');

var app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((todo) => {
    res.send(todo)
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({
      todo
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(PORT, () => {
  console.log(`Started at port ${PORT}`);
});

module.exports = {
  app,
};
