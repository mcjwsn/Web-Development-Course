const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

const app = express();
const port = 3003;

app.use(bodyParser.json());

app.use(booksRouter);

app.use(ordersRouter);

app.use(usersRouter);

app.get('/', (req, res) => {
  res.send('Witaj w mojej księgarni cz3!');
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});