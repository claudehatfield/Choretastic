const db = require("../models/ToDo");

const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Todo.find(req.query)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Todo.findById(req.params.id)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Todo.create(req.body)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Todo.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Todo.findById(req.params.id)
      .then(dbTodo => dbTodo.remove())
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  }
};