const express = require("express");
const books = require("../data/books");
const users = require("../data/users");

const general = express.Router();





general.get("/", (req, res) => {
  res.json("please hit the http://localhost:3000/books/");
});

// Task 1: Get all books
general.get("/books", (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
general.get("/books/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  book ? res.json(book) : res.status(404).json({ message: "Book not found" });
});

// Task 3: Get books by Author
general.get("/books/author/:author", (req, res) => {
  const result = Object.values(books).filter(b => b.author === req.params.author);
  res.json(result);
});

// Task 4: Get books by Title
general.get("/books/title/:title", (req, res) => {
  const result = Object.values(books).filter(b => b.title === req.params.title);
  res.json(result);
});

// Task 5: Get book reviews
general.get("/review/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Task 6: Register new user
general.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

module.exports = general;
