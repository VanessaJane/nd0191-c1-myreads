import BooksShelf from "./BooksShelf";
import { Link } from "react-router-dom";

const ListBooks = ({ books }) => {
  const currentlyReadingBooks = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
  const readBooks = books.filter((book) => book.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BooksShelf title="Currently Reading" books={currentlyReadingBooks} />
          <BooksShelf title="Want to Read" books={wantToReadBooks} />
          <BooksShelf title="Read" books={readBooks} />
        </div>
      </div>
      <Link to="/search" className="seach-page">
        Add a book
      </Link>
    </div>
  );
};

export default ListBooks;
