const { books } = require('../data');
const express = require('express');
const router = express.Router();

// ------------------------------------------------------------------------------------------------------------- Retrieve reviews 

// GET a book reviews by specific title or author using query parameters
router.get("/reviews", (req,res) => {
  // If title query parameter exists, filter by title. Same for author
  if (req.query.title && req.query.author) {
    // GET by specific title using query parameters
    let title = req.query.title;
    let author = req.query.author;
    let book = books.filter((book) => (book.title === title && book.author === author));
    res.json(book[0].reviews);
  } else {
    // If no title query parameter, return all books
    res.status(403).json({ message: "Enter the book info" });
  }
});

// GET a book reviews by specific ISBN using path parameters
router.get("/:isbn/reviews", (req,res) => {
  let isbn = req.params.isbn
  let book = books.filter((book) => book.isbn === isbn)
  res.json(book[0].reviews)
});

// ------------------------------------------------------------------------------------------------------------- Retrieve books

// GET request: Retrieve all books or a specific book by title or author using query parameters
router.get("/", (req,res) => {
  // If title query parameter exists, filter by title. Same for author
  if (req.query.title && req.query.author) {
    // GET by specific title using query parameters
    let title = req.query.title;
    let author = req.query.author;
    let book = books.filter((book) => (book.title === title && book.author === author));
    res.json(book[0]);
  } else {
    // If no title query parameter, return all books
    res.json(books);
  }
});


// GET a book by specific ISBN using path parameters
router.get("/:isbn", (req,res) => {
  let isbn = req.params.isbn
  let book = books.filter((book) => book.isbn === isbn)
  res.json(book[0])
});

// ------------------------------------------------------------------------------------------------------------- Add a review

// POST add a book review by specific ISBN using path parameters
router.post("/:isbn/reviews", (req,res) => {
  let isbn = req.params.isbn;
  let user = req.user.username;
  if (!user)
    return res.status(403).json({ message: "User not authenticated" });
  let { rating, comment } = req.body;
  if (!rating || !comment) {
    return res.status(400).json({ message: "Rating and comment are required" });
  }
  addReview("", "", isbn, user, rating, comment);
  return res.status(200).json({ message: "Added" });
});

// POST add a book review by specific title or author using query parameters
router.post("/reviews", (req,res) => {
  let user = req.user.username;
  if (!user)
    return res.status(403).json({ message: "User not authenticated" });
  let { rating, comment } = req.body;
  // If title & author query parameter exists, filter by title. Same for author
  if (req.query.title && req.query.author) {
    // GET by specific title using query parameters
    let {title, author} = req.query;
    addReview(author, title, "", user, rating, comment);
  } else {
    return res.status(403).json({ message: "Enter the book info" });
  }
  return res.status(200).json({ message: "Added" });
});

// ------------------------------------------------------------------------------------------------------------- Edit a review

// POST add a book review by specific ISBN using path parameters
router.put("/:isbn/reviews", (req,res) => {
  let isbn = req.params.isbn;
  let user = req.user.username;
  if (!user)
    return res.status(403).json({ message: "User not authenticated" });
  let { rating, comment } = req.body;
  if (!rating || !comment) {
    return res.status(400).json({ message: "Rating and comment are required" });
  }
  editReview("", "", isbn, user, rating, comment);
  return res.status(200).json({ message: "Edited" });
});

// POST add a book review by specific title or author using query parameters
router.put("/reviews", (req,res) => {
  let user = req.user.username;
  if (!user)
    return res.status(403).json({ message: "User not authenticated" });
  let { rating, comment } = req.body;
  // If title & author query parameter exists, filter by title. Same for author
  if (req.query.title && req.query.author) {
    // GET by specific title using query parameters
    let {title, author} = req.query;
    editReview(author, title, "", user, rating, comment);
  } else {
    return res.status(403).json({ message: "Enter the book info" });
  }
  return res.status(200).json({ message: "Edited" });
});

// ------------------------------------------------------------------------------------------------------------- Delete a review

// POST add a book review by specific ISBN using path parameters
router.delete("/:isbn/reviews", (req,res) => {
  let isbn = req.params.isbn;
  let user = req.user.username;
  if (!user)
    return res.status(403).json({ message: "User not authenticated" });
  let { rating, comment } = req.body;
  if (!rating || !comment) {
    return res.status(400).json({ message: "Rating and comment are required" });
  }
  deleteReview("", "", isbn, user);
  return res.status(200).json({ message: "Deleted" });
});

// POST add a book review by specific title or author using query parameters
router.delete("/reviews", (req,res) => {
  let user = req.user.username;
  if (!user)
    return res.status(403).json({ message: "User not authenticated" });
  let { rating, comment } = req.body;
  // If title & author query parameter exists, filter by title. Same for author
  if (req.query.title && req.query.author) {
    // GET by specific title using query parameters
    let {title, author} = req.query;
    deleteReview(author, title, "", user);
  } else {
    return res.status(403).json({ message: "Enter the book info" });
  }
  return res.status(200).json({ message: "Deleted" });
});

// -------------------------------------------------------------------------------------------------------------

function addReview(author, title, isbn, user, rating, comment) {
  for (let i = 0; i < books.length; i++) {
    if ((books[i].isbn === isbn) || (books[i].title === title && books[i].author === author)) {
      books[i].reviews.push({user, rating, comment})
    }
  }
}

function editReview(author, title, isbn, user, rating, comment) {
  for (let i = 0; i < books.length; i++) {
    if ((books[i].isbn === isbn) || (books[i].title === title && books[i].author === author)) {
      for (let j = 0; j < books[i].reviews.length; j++) {
        if (books[i].reviews[j].user === user) {
          books[i].reviews.splice(j, 1);
          books[i].reviews.push({user, rating, comment});
        }
      }
    }
  }
}

function deleteReview(author, title, isbn, user) {
  for (let i = 0; i < books.length; i++) {
    if ((books[i].isbn === isbn) || (books[i].title === title && books[i].author === author)) {
      for (let j = 0; j < books[i].reviews.length; j++) {
        if (books[i].reviews[j].user === user) {
          books[i].reviews.splice(j, 1);
        }
      }
    }
  }
}

module.exports=router;
