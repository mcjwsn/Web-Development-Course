const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db'); 

const app = express();
const port = 3000;

// Middleware do parsowania JSON
app.use(bodyParser.json());

// pobranie ksiazek
app.get('/api/books', (req, res) => {
    db.all("SELECT * FROM books", [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });
// pobranie po ID
app.get('/api/books/:id', (req,res) =>
{
    const {id} = req.params;
    db.all("SELECT * FROM books WHERE id = ?", [id], (err,row)=>{
    if(err){
        res.status(500).json({error:err.message});
        return ;
    }
    if (row) {
        res.json(row);
    }
    else{
        res.status(404).json({error: 'Nie znaleziono'});
    }
});
});
// dodawanie
app.post('/api/books', (req,res)=>{
    const{ name,author, year} = req.body;
    if(!name || !year || !author){
        return res.status(400),json({error:'Wszystkie dane są wymagane'});
    }

    const query = "INSERT INTO books (name, author, year) VALUES (?, ?, ?)";

    db.run(query, [name, author, year], function (err){
        if (err){
            res.status(500).json({error: err.message});
            return;
        }
        res.status(201).json({id: this.lastID});
    });
});
// usuwanie po id
app.delete('/api/books/:id', (req,res)=>{
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
// default
app.get('/', (req, res) => {
    res.send('Witaj w mojej księgarni!');
  });

app.listen(port,() =>{
    console.log('Serwer dziala na porcie %i',port);
});