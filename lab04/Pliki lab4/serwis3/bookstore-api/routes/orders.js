const express = require('express');
const db = require('../database/db');
const router = express.Router();
const authenticateToken = require('./token')

router.get('/api/orders/:userId', (req, res) => {
  const { userId } = req.params;
  db.all("SELECT * FROM orders WHERE user_id = ?", [userId], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

router.post('/api/orders',authenticateToken, (req, res) => {
  const { user_id, book_id, quantity } = req.body;

  db.get("SELECT * FROM books WHERE id = ?", [book_id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Książka o podanym ID nie istnieje' });
      return;
    }

    const query = "INSERT INTO orders (user_id, book_id, quantity) VALUES (?, ?, ?)";
    db.run(query, [user_id, book_id, quantity], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ order_id: this.lastID });
    });
  });
});

router.delete('/api/orders/:orderId',authenticateToken, (req, res) => {
  const { orderId } = req.params;
  db.run("DELETE FROM orders WHERE id = ?", [orderId], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Zamówienie nie zostało znalezione' });
    } else {
      res.status(204).send();
    }
  });
});

router.patch('/api/orders/:orderId',authenticateToken, (req, res) => {
  const { orderId } = req.params;
  const { quantity } = req.body;

  if (quantity <= 0) {
    return res.status(400).json({ error: 'Ilość musi być większa niż 0' });
  }

  db.run("UPDATE orders SET quantity = ? WHERE id = ?", [quantity, orderId], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Zamówienie nie zostało znalezione' });
    } else {
      res.status(200).json({ message: 'Zamówienie zostało zaktualizowane' });
    }
  });
});

module.exports = router;
