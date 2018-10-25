var mongoose = require('mongoose');

// Tell mongoose which promise library we want to use,
// which will be the built-in one in the node js env.
// We have to do that because Promises used to not be
// built-in and we had to use third-parties...
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.export = { mongoose };