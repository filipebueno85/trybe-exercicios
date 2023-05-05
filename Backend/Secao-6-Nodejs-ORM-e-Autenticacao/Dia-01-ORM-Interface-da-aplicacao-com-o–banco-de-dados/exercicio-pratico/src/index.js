const express = require('express');
const BookController = require('../src/controllers/book.controller');
const erroMessage = require('./middlewares/erroMessage');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookController.create);

app.put('/books/:id', BookController.update);

app.delete('/books/:id', erroMessage, BookController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));