const express = require('express');
const router = express.Router();

const Todo = require('../schemas/todo');

router.post('/todo', (req, res) => {
	const newTodo = new Todo({
		name: req.body.name,
		description: req.body.description,
		isCompleted: false,
		dateStarted: req.body.dateStarted,
		dateFinished: req.body.dateFinished,
		isHabit: req.body.isHabit
	});
	newTodo.save().then(() => Todo.find().then(todos => res.json(todos)));
});

router.get('/todos', (req, res) => {
	Todo.find().then(todos => res.json(todos));
});

router.get('/todo', (req, res) => {
	Todo.findById(req.body._id).then(todo => res.json(todo));
});

router.delete('/todo', (req, res) => {
	Todo.deleteOne({ _id: req.body._id }).then(() =>
		Todo.find().then(todos => res.json(todos))
	);
});

router.put('/todo', (req, res) => {
	const {
		_id,
		name,
		description,
		isCompleted,
		dateStarted,
		dateFinished,
		isHabit
	} = req.body;
	Todo.updateOne(
		{ _id },
		{
			name,
			description,
			isCompleted,
			dateStarted,
			dateFinished,
			isHabit
		}
	).then(() => Todo.find().then(todos => res.json(todos)));
});

module.exports = router;
