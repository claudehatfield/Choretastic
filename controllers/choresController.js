const db = require("../models/User");

// Defining methods for the bookController
module.exports = {
  // findAll: function(req, res) {
  //   db.Book.find(req.query)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.insertInto({ id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => dbBook.remove())
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // }
};
