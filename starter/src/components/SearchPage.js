import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookDetails from "./BookDetails";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

const SearchPage = ({ shelfs }) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [bookShelfs, setBookShelfs] = useState(shelfs); //keep state for next search

  useEffect(() => {
    return () => {
      setSearchedBooks([]);
    };
  }, []);

  const searchBooks = debounce((query) => {
    if (!query) return setSearchedBooks([]);
    BooksAPI.search(query, 10)
      .then((result) => {
        if (result instanceof Array) {
          setSearchedBooks(mapBooksWithCorrectShelves(result, bookShelfs));
        } else {
          setSearchedBooks([]);
        }
      })
      .catch((e) => {
        setSearchedBooks([]);
      });
  }, 500);

  const mapBooksWithCorrectShelves = (books, shelves) => {
    return books.map((e) => {
      let shelf = shelves[e.id];
      if (shelf === null || shelf === undefined) {
        e.shelf = "none";
      } else {
        e.shelf = shelf;
      }
      return e;
    });
  };

  const updateQuery = (query) => {
    setQuery(query.trim());
    query === "" ? setSearchedBooks([]) : searchBooks(query);
  };

  const updatedBook = (result) => {
    let shelves = {};
    Object.keys(result).forEach((element) => {
      const a = Object.fromEntries(result[element].map((x) => [x, element]));
      shelves = { ...shelves, ...a };
    });
    setSearchedBooks(mapBooksWithCorrectShelves(searchedBooks, shelves));
    setBookShelfs(shelves);
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
        {searchedBooks.length > 0 ? (
          <ol className="books-grid">
            {searchedBooks.map((book) => (
              <li key={book.id} className="book">
                <BookDetails book={book} onUpdated={updatedBook} />
              </li>
            ))}
          </ol>
        ) : (
          <div className="book-no-found-box">
            <p className=" book-no-found-message">Book Not Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

SearchPage.prototypes = {
  shelfs: PropTypes.array.isRequired,
};

export default SearchPage;
