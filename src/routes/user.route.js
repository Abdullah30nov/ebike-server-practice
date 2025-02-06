const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken')


router.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password});
    res.status(201).json({
      newUser: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: "erer"
     });
  }
});


router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;