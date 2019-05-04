const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();
const cors = require('cors');

let todos = [
  {
    id: '0',
    task: 'To clean my room',
    description: 'To clean my room especially a windows'
  },
  {
    id: '1',
    task: 'To watch a react vids',
    description: 'To watch last section'
  },
  {
    id: '2',
    task: 'To learn German',
    description: 'To learn 12-s section'
  },
  {
    id: '3',
    task: 'To make webster',
    description: 'to make last sections'
  }
];

app.use(bodyParser.json());
app.use(cors());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  res.json(todos.find(todo => todo.id === req.params.id));
});

app.post('/todos/add', (req, res) => {
  todos.push(req.body);
  res.json(todos);
});

app.put('/todos/edit', (req, res) => {
  res.json(
    (todos = todos.map(todo =>
      todo.id === req.body.id ? (todo = req.body) : todo
    ))
  );
});

app.delete('/todos/:id', (req, res) => {
  todos.splice(todos.indexOf(todos.find(todo => todo.id === req.params.id)), 1);
  res.json(todos);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
