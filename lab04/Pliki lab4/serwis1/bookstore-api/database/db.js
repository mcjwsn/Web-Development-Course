const sqlite3 = require('sqlite3').verbose();

// Utworzenie połączenia z bazą danych SQLite (jeśli plik bazy danych nie istnieje, zostanie utworzony)
const db = new sqlite3.Database('./books.db', (err) => {
  if (err) {
    console.error("Nie udało się połączyć z bazą danych", err);
  } else {
    console.log("Połączono z bazą danych SQLite.");
  }
});

// Utworzenie tabeli books, jeśli jeszcze nie istnieje
db.run(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    year INTEGER NOT NULL
  );
`);

module.exports = db;