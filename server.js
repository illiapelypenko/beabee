const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todos = require('./routes/todos');

// Mongoose
const mongodbUrl = 'mongodb://localhost:27017/beabee';
mongoose.connect(mongodbUrl, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:')); // Bind connection to error event

const port = 5100;
const app = express();

app.use(bodyParser.json());
app.use(cors()); // for working requests
app.use('/api/todos', todos);

app.listen(port, () => console.log(`Server started on port ${port}`));
