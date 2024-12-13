const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const ordersRouter = require('./routes/orders');

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.use(booksRouter);

app.use(ordersRouter);

app.get('/', (req, res) => {
  res.send('Witaj w mojej księgarni cz2!');
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});