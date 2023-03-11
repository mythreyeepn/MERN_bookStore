const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {}
  if (!books) {
    return res.status(404).json({ message: "No books" });
  }
  return res.status(200).json({ books: books });
};

const addBooks = async (req, res, next) => {
  const { name, author, description, price, avilable, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      avilable,
      image,
    });
    console.log("check", book);
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "unable to Add" });
  }
  return res.status(201).json({ message: "Added Book Successful" });
};

const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ book });
};

const updateBookById = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, avilable, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      avilable,
      image,
    });
    console.log(book);
    //book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to update by Id" });
  }
  return res.status(200).json({ message: "Book Updated Successfully" });
};

const deleteBookById = async (req, res, next) => {
  const id = req.params.id;

  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to delete by Id" });
  }
  return res.status(200).json({ message: "Book Deleted Successfully" });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById;

// difference between findByidandremove and findByIdanddelete
// why to add save()after update when its working fine without it.
