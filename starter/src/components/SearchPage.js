import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookDetails from "./BookDetails";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SearchPage = ({ shelfs }) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [bookShelfs, setBookShelfs] = useState(shelfs);

  useEffect(() => {
    return () => {
      setSearchedBooks([]);
    };
  }, []);

  const searchBooks = async (query) => {
    BooksAPI.search(query, 10)
      .then((result) => {
        if (result instanceof Array) {
          setSearchedBooks(result);
        } else {
          setSearchedBooks([]);
        }
      })
      .catch((e) => {
        setSearchedBooks([]);
      });
  };

  const updateQuery = (query) => {
    setQuery(query.trim());
    query === "" ? setSearchedBooks([]) : searchBooks(query);
  };

  const updatedBook = (result) => {
    let shelf = {};
    Object.keys(result).forEach((element) => {
      const a = Object.fromEntries(result[element].map((x) => [x, element]));
      shelf = { ...shelf, ...a };
    });
    setBookShelfs(shelf);
  };

  const getShelf = (book) => {
    let shelf = bookShelfs[book.id];
    if (shelf === null || shelf === undefined) {
      return "none";
    }
    return shelf;
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book) => (
            <li key={book.id} className="book">
              <BookDetails
                book={book}
                shelf={getShelf(book)}
                onUpdated={updatedBook}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

SearchPage.prototypes = {
  shelfs: PropTypes.array.isRequired,
};

export default SearchPage;
