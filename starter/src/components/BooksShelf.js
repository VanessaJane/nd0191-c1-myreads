import BookDetails from "./BookDetails";
import PropTypes from "prop-types";

const BooksShelf = ({ title, books, onUpdated }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id} className="book">
              <BookDetails book={book} onUpdated={onUpdated} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BooksShelf.prototypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdated: PropTypes.func.isRequired,
};

export default BooksShelf;
