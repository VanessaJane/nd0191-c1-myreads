import BooksShelf from "./BooksShelf";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const ListBooks = ({ saveShelfs }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const results = await BooksAPI.getAll();
    setBooks(results);
  };

  useEffect(() => {
    fetchBooks();

    return () => {
      setBooks([]);
    };
  }, []);

  const onUpdateShelf = () => {
    fetchBooks();
  };

  const gotoSearch = () => {
    let shelfs = Object.fromEntries(books.map((x) => [x.id, x.shelf]));
    saveShelfs(shelfs);
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
            books={books.filter((book) => book.shelf === "currentlyReading")}
            onUpdated={onUpdateShelf}
          />
          <BooksShelf
            title="Want to Read"
            books={books.filter((book) => book.shelf === "wantToRead")}
            onUpdated={onUpdateShelf}
          />
          <BooksShelf
            title="Read"
            books={books.filter((book) => book.shelf === "read")}
            onUpdated={onUpdateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" onClick={gotoSearch}>
          Add a book
        </Link>
      </div>
    </div>
  );
};

ListBooks.prototypes = {
  saveShelfs: PropTypes.func.isRequired,
};

export default ListBooks;
