const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

let books = [];
let idCounter = 1;

app.get("/books", (req, re) => {
    res.json(books);
});

app.get("/books/:id", (Req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

app.post("/books", (res, req) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res
            .status(400)
            .json({ message: "Title and author are required" });
    }
    const newBook = { id: idCounter++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });

    const { title, author } = req.body;
    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book);
});

app.delete("/books/:id", (req, res) => {
    const index = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(404).json({ message: "Book not found" });

    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
