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
  let rating = req.body.rating;
  let comment = req.body.comment;
  addReview("", "", isbn, user, rating, comment);
});

// POST add a book review by specific title or author using query parameters
router.post("/reviews", (req,res) => {
  let user = req.user.username;
  if (!user)
    return res.status(403).json({ message: "User not authenticated" });
  let rating = req.body.rating;
  let comment = req.body.comment;
  // If title & author query parameter exists, filter by title. Same for author
  if (req.query.title && req.query.author) {
    // GET by specific title using query parameters
    let title = req.query.title;
    let author = req.query.author;
    addReview(author, title, "", user, rating, comment);
  } else {
    return res.status(403).json({ message: "Enter the book info" });
  }
});

// ------------------------------------------------------------------------------------------------------------- Edit a review

// // POST add a book review by specific ISBN using path parameters
// router.put("/:isbn/reviews", (req,res) => {
//   let isbn = req.params.isbn;
//   let user = req.user.username;
//   if (!user)
//     return res.status(403).json({ message: "User not authenticated" });
//   let rating = req.body.rating;
//   let comment = req.body.comment;
//   addReview("isbn", isbn, user, rating, comment);
// });

// // POST add a book review by specific title or author using query parameters
// router.put("/reviews", (req,res) => {
//   let user = req.user.username;
//   if (!user)
//     return res.status(403).json({ message: "User not authenticated" });
//   let rating = req.body.rating;
//   let comment = req.body.comment;
//   // If title query parameter exists, filter by title. Same for author
//   if (req.query.title) {
//     // GET by specific title using query parameters
//     let title = req.query.title;
//     addReview("title", title, user, rating, comment);
//   } else if (req.query.author) {
//     // GET by specific author using query parameters
//     let author = req.query.author;
//     addReview("author", author, user, rating, comment);
//   } else {
//     return res.status(403).json({ message: "Enter the book info" });
//   }
// });

// -------------------------------------------------------------------------------------------------------------

function addReview(author, title, isbn, user, rating, comment) {
  for (let i = 0; i < books.length; i++) {
    if ((books[i].isbn === isbn) || (books[i].title === title && books[i].author === author)) {
      books[i].reviews.push({user, rating, comment})
    }
  }
}

module.exports=router;
