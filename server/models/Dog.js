const { Schema } = require('mongoose');

const dogSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  spaynuet: {
    type: Boolean,
    required: true,
  },
})

module.exports = dogSchema;