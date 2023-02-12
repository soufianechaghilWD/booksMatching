const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  picUrl: { type: String, required: true },
  emotionality: { type: Number, required: true },
  comedy: { type: Number, required: true },
  action: { type: Number, required: true },
  mistery: { type: Number, required: true },
});

const Book = mongoose.model('Book', schema);

module.exports = Book;
