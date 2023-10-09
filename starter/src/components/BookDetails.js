import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";
import { useState } from "react";

const BookDetails = ({ book, shelf, onUpdated }) => {
  const [selectedShelf, setSelectedShelf] = useState(shelf);
  const onChangeShelf = (event) => {
    if (book.shelf === event.target.value) {
      return;
    }
    setSelectedShelf(event.target.value);
    updateBook(event.target.value);
  };

  const updateBook = async (shelf) => {
    BooksAPI.update(book, shelf).then((result) => {
      onUpdated(result);
    });
  };

  const getAuthorsName = (book) => {
    if (book.authors === undefined || book.authors === null) {
      return "";
    }
    return book.authors.join(", ");
  };

  const getThumbnail = (book) => {
    const imageLinks = book.imageLinks;
    if (imageLinks === undefined || imageLinks === null) {
      return "";
    }
    return imageLinks.thumbnail;
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${getThumbnail(book)})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={selectedShelf} onChange={onChangeShelf}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{getAuthorsName(book)}</div>
    </div>
  );
};

BookDetails.prototypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onUpdated: PropTypes.func.isRequired,
};

export default BookDetails;
