import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookDetails from "./BookDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    return () => {
      setBooks([]);
    };
  }, []);

  const searchBooks = async (query) => {
    const results = await BooksAPI.search(query, 10);
    setBooks(results);
  };

  const updateQuery = (query) => {
    setQuery(query.trim());
    query === "" ? setBooks([]) : searchBooks(query);
  };

  const updatedBook = () => {
    navigate("/");
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
          {books.map((book) => (
            <li key={book.id} className="book">
              <BookDetails book={book} onUpdated={updatedBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
