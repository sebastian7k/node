const express = require('express');
const UserModel = require('../src/models/user_models');

const router = express.Router();

router.get('/home', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

router.get('/users', (req, res) => {
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

router.post('/users', async (req, res) => {
  const user = await UserModel.create(req.body);
  res.status(201).json(user);
});

module.exports = router;
