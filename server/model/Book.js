const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avilable: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);

//books
// [{
//   "name": "In Chocolate we trust",
//   "author": "Peter Kurie",
//   "description": "In Chocolate we trust",
//   "price": 3500,
//   "image":"https://m.media-amazon.com/images/I/6199z-D8ZzL._AC_UY218_.jpg",
//   "avilable": true
// },
// {
//   "name": "The way of the Shepherd",
//   "author": "Kevin Leman",
//   "description": "Seven Secrets to Managing Productive People",
//   "price": 3000,
//   "image":"https://m.media-amazon.com/images/I/71Py11owjDL._AC_UY218_.jpg",
//   "avilable": true
// },
// {
//   "name": "13 steps to riches",
//   "author": "Erik Swanson",
//   "description": "The 13 steps to riches",
//   "price": 2000,
//   "image":"https://m.media-amazon.com/images/I/61D5RKEakgL._AC_UY218_.jpg",
//   "avilable": true
// },
// {
//   "name": "Learn to lead",
//   "author": "Katie Anderson",
//   "description": "Learn to lead from the front",
//   "price": 2500,
//   "image":"https://m.media-amazon.com/images/I/41X2s4LEALL._AC_UY218_.jpg",
//   "avilable": true
// },
// {
//   "name": "Bitcoin: A Beginner's Guide",
//   "author": "Benjamin Hart",
//   "description": "Year off Ramp from the corrupt political system",
//   "price": 2800,
//   "image":"https://m.media-amazon.com/images/I/61rXYhtKJ5L._AC_UY218_.jpg",
//   "avilable": true
// },
// {
//   "name": "Autobiography of Benjamin Franklin",
//   "author": "Benjamin Franklin",
//   "description": "Autobiography of Benjamin Franklin",
//   "price": 1500,
//   "image":"https://m.media-amazon.com/images/I/41X2s4LEALL._AC_UY218_.jpg",
//   "avilable": true
// }]
