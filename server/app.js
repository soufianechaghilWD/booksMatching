const express = require('express');
const Book = require('./models/book');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/books', async (req, res) => {
  const book = req.body;

  try {
    const createdBok = new Book(book);
    await createdBok.save();

    res.status(201).send(createdBok);
  } catch (e) {
    console.log(e.message);
    res.status(400).send('Something went wrong');
  }
});

app.get('/books/:emotionality/:comedy/:action/:mistery', async (req, res) => {
  const { emotionality, comedy, action, mistery } = req.params;

  const books = await Book.find({ emotionality, comedy, action, mistery });

  res.status(200).send(books);
});

module.exports = app;
