const express = require('express');
const router = express.Router();

const ToDo =require('../../models/ToDo')

router.get('/', (req, res) => {
  ToDo.find()
  .then(todos => res.json(todos));
} );


router.post('/', (req, res) => {
  const newTodo = new ToDo({
    todoTitle: req.body.todoTitle,
    todoDescription: req.body.todoDescription,
    todoValue: req.body.todoValue
  });

  newTodo.save().then(todo => res.json(todo));
} );


router.delete('/:id', (req, res) => {
 ToDo.findById(req.params.id)
 .then(todo => todo.remove().then(() => res.json({success: true})))
 .catch(err => res.status(404).json({success: false}));
});


module.exports = router;