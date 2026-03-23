const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/user_models');

const router = express.Router();

router.get('/users', (req, res) => {
  res.json({ message: 'rota de users funcionando' });
});

router.post('/users', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Banco de dados indisponivel no momento.' });
    }

    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
