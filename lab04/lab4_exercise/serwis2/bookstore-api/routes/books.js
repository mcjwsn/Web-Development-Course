const express = require('express');
const db = require('../database/db'); // Import połączenia z bazą danych
const router = express.Router();

// Pobranie wszystkich książek
router.get('/api/books', (req, res) => {
  db.all("SELECT * FROM books", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Pobranie książki po ID
router.get('/api/books/:id', (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM books WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.json(row);
    } else {
      res.status(404).json({ error: 'Nie znaleziono książki' });
    }
  });
});

// Dodanie nowej książki
router.post('/api/books', (req, res) => {
  const { name, author, year } = req.body;
  if (!name || !year || !author) {
    return res.status(400).json({ error: 'Wszystkie dane są wymagane' });
  }

  const query = "INSERT INTO books (name, author, year) VALUES (?, ?, ?)";
  db.run(query, [name, author, year], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Usunięcie książki po ID
router.delete('/api/books/:id', (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM books WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Książka nie została znaleziona' });
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
