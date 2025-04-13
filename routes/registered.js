const express = require("express");
const books = require("../data/books");

const registered = express.Router();

// Middleware to simulate login (simple version)
registered.use((req, res, next) => {
  const username = req.headers["username"];
  if (!username) return res.status(401).json({ message: "Unauthorized" });
  req.username = username;
  next();
});

// Task 8: Add/Modify review
registered.put("/review/:isbn", (req, res) => {
  const { review } = req.body;
  const isbn = req.params.isbn;
  if (books[isbn]) {
    books[isbn].reviews[req.username] = review;
    res.json({ message: "Review added/updated" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Task 9: Delete review
registered.delete("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  if (books[isbn]?.reviews[req.username]) {
    delete books[isbn].reviews[req.username];
    res.json({ message: "Review deleted" });
  } else {
    res.status(404).json({ message: "Review not found or not owned" });
  }
});

module.exports = registered;
