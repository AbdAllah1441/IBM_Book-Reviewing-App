const users = [
    {
      username: "johnDoe",
      password: "password123"
    },
    {
      username: "janeSmith",
      password: "passw0rd!"
    },
    {
      username: "bookLover",
      password: "readMoreBooks"
    },
    {
      username: "literatureFan",
      password: "classicL1terature"
    },
    {
      username: "techGeek",
      password: "geekyP@ss"
    },
    {
      username: "horrorFan",
      password: "scaryStuff321"
    },
    {
      username: "fantasyReader",
      password: "dragons&Magic"
    },
    {
      username: "historyBuff",
      password: "h1storyR0cks"
    },
    {
      username: "sciFiFan",
      password: "outerSpace99"
    },
    {
      username: "classicReader",
      password: "timelessReads"
    }
];

const books = [
    {
      isbn: "978-3-16-148410-0",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      reviews: [
        { user: "JohnDoe", rating: 5, comment: "A timeless classic." },
        { user: "JaneSmith", rating: 4, comment: "Beautifully written, but sad." }
      ]
    },
    {
      isbn: "978-0-7432-7356-5",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      reviews: [
        { user: "BookLover123", rating: 5, comment: "A must-read for everyone." },
        { user: "LiteratureFan", rating: 4, comment: "Very impactful." }
      ]
    },
    {
      isbn: "978-0-452-28423-4",
      title: "1984",
      author: "George Orwell",
      year: 1949,
      reviews: [
        { user: "HistoryBuff", rating: 5, comment: "Chilling and relevant." },
        { user: "SciFiFan", rating: 4, comment: "A thought-provoking read." }
      ]
    },
    {
      isbn: "978-1-56619-909-4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      reviews: [
        { user: "Janeite", rating: 5, comment: "A witty and romantic story." },
        { user: "ClassicReader", rating: 4, comment: "Charming and insightful." }
      ]
    },
    {
      isbn: "978-0-7432-7355-8",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      reviews: [
        { user: "TeenReader", rating: 4, comment: "Relatable and deep." },
        { user: "OldSoul", rating: 3, comment: "Not for everyone, but interesting." }
      ]
    },
    {
      isbn: "978-0-14-028329-7",
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      reviews: [
        { user: "SeaLover", rating: 4, comment: "Epic and adventurous." },
        { user: "ClassicFan", rating: 3, comment: "A bit long, but worth it." }
      ]
    },
    {
      isbn: "978-0-394-82375-3",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      reviews: [
        { user: "FantasyFan", rating: 5, comment: "The best fantasy series ever." },
        { user: "EpicReader", rating: 5, comment: "A masterpiece." }
      ]
    },
    {
      isbn: "978-0-394-82087-5",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      reviews: [
        { user: "AdventureLover", rating: 5, comment: "A fun and thrilling journey." },
        { user: "Bookworm", rating: 4, comment: "A delightful read." }
      ]
    },
    {
      isbn: "978-0-618-00221-3",
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      year: 1997,
      reviews: [
        { user: "HPFan", rating: 5, comment: "Magical and captivating." },
        { user: "YoungReader", rating: 5, comment: "My favorite book." }
      ]
    },
    {
      isbn: "978-0-316-76948-0",
      title: "The Shining",
      author: "Stephen King",
      year: 1977,
      reviews: [
        { user: "HorrorFan", rating: 5, comment: "Terrifying and gripping." },
        { user: "KingReader", rating: 4, comment: "A great horror novel." }
      ]
    }
];

module.exports = { users, books };
