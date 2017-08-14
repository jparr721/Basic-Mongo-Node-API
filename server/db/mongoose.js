var mongoose = require('mongoose');

// Tells mongoose that we want ES6 promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
