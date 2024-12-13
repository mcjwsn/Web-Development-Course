const sqlite3 = require('sqlite3').verbose();

//baz
const db = new sqlite3.Database('./books.db', (err) => {
  if (err) {
    console.error("Nie udało się połączyć z bazą danych", err);
  } else {
    console.log("Połączono z bazą danych SQLite.");
  }
});

// books, jeśli jeszcze nie istnieje
db.run(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER NOT NULL
  );
`);

// orders, jeśli jeszcze nie istnieje
db.run(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (book_id) REFERENCES books(id)
  );
`);
// users jeśli jeszcze nie istnieje
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );
`);

module.exports = db;