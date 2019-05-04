const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
	name: String,
	description: String,
	isCompleted: Boolean,
	dateStarted: String,
	dateFinished: String,
	isHabit: Boolean
});

const TodoModel = mongoose.model('TodoModel', TodoSchema);

module.exports = TodoModel;
