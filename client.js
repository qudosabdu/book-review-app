const axios = require("axios");

const BASE_URL = "http://localhost:3000"; // Make sure your server is running

// Task 10: Get all books – Using async callback function
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("Task 10 - All Books:\n", response.data);
  } catch (error) {
    console.error("Error fetching books:", error.message);
  }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then(response => {
      console.log(`Task 11 - Book with ISBN ${isbn}:\n`, response.data);
    })
    .catch(error => {
      console.error("Error fetching book by ISBN:", error.message);
    });
}

// Task 12: Search by Author – Using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(`Task 12 - Books by ${author}:\n`, response.data);
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

// Task 13: Search by Title – Using async/await
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(`Task 13 - Books titled "${title}":\n`, response.data);
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
  }
}

// Run all tasks
async function runAll() {
  await getAllBooks();                    // Task 10
  getBookByISBN("123456");                // Task 11
  await getBooksByAuthor("Author A");     // Task 12
  await getBooksByTitle("Book One");      // Task 13
}

runAll();
