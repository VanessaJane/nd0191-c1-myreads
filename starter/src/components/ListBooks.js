import BooksShelf from "./BooksShelf";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";

const ListBooks = () => {
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  const fetchBooks = async () => {
    const results = await BooksAPI.getAll();
    setCurrentlyReadingBooks(
      results.filter((book) => book.shelf === "currentlyReading")
    );
    setWantToReadBooks(results.filter((book) => book.shelf === "wantToRead"));
    setReadBooks(results.filter((book) => book.shelf === "read"));
  };

  useEffect(() => {
    fetchBooks();

    return () => {
      setCurrentlyReadingBooks([]);
      setWantToReadBooks([]);
      setReadBooks([]);
    };
  }, []);

  const onUpdatedShelf = () => {
    console.log("Call reload");
    fetchBooks();
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BooksShelf
            title="Currently Reading"
            books={currentlyReadingBooks}
            onUpdated={onUpdatedShelf}
          />
          <BooksShelf
            title="Want to Read"
            books={wantToReadBooks}
            onUpdated={onUpdatedShelf}
          />
          <BooksShelf
            title="Read"
            books={readBooks}
            onUpdated={onUpdatedShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
