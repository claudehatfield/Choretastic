const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todoTitle: {
      type: String,
      required: "true"
    },

    todoDescription: {
      type: String,
      required: "true"
    },

    todoValue: {
      type: String,
      required: "true"
    },

});

module.exports = Todo = mongoose.model('todo', TodoSchema);

