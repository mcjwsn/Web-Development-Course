const express = require('express');
const db = require('../database/db');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateToken = require('./token')
const jwtSecret = 'supersecretkey';

// rejstrowanie
router.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Wymagane: email, haslo' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // hashowanie
    const query = `INSERT INTO users (email, password) VALUES (?, ?)`;

    db.run(query, [email, hashedPassword], function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Blad rejestracji' });
      }
      res.status(201).json({ userId: this.lastID });
    });
  } catch (error) {
    res.status(500).json({ error: 'Blad serwera' });
  }
});

// ologowanie
router.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Wymagane: email, haslo' });
  }

  const query = `SELECT * FROM users WHERE email = ?`;

  db.get(query, [email], async (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Blad logowania' });
    }

    if (!user) {
      return res.status(404).json({ error: 'Nie znaleziono uzytkownika' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Nieprawidlowe dane ' });
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '12h' });
    
    res.json({message: 'Zalogowano',token});
  });
});

module.exports = router;