const express = require('express');
const UserModel = require('../src/models/user_models');

const app = express();
const port = 8080;

app.use(express.json());

app.get('/home', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1>Hello world</h1>');
});

app.get('/users', (req, res) => {
  const users = [
    {
      name: 'Cristiano Soares',
      email: 'cristiano@example.com',
    },
    {
      name: 'Jose Aleixo',
      email: 'jose@example.com',
    },
  ];
  res.status(200).json(users);
});

app.post('/users', async (req, res) => {
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}`);
});
