import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const BookDetails = ({ book, onUpdated }) => {
  const shelves = [
    {
      id: "0",
      shelfDisplayName: "Move to...",
      isDisable: true,
    },
    {
      id: "1",
      shelfName: "currentReading",
      shelfDisplayName: "Currently Reading",
      isDisable: false,
    },
    {
      id: "2",
      shelfName: "wantToRead",
      shelfDisplayName: "Want to Read",
      isDisable: false,
    },
    {
      id: "3",
      shelfName: "read",
      shelfDisplayName: "Read",
      isDisable: false,
    },
    {
      id: "4",
      shelfName: "none",
      shelfDisplayName: "None",
      isDisable: false,
    },
  ];

  const onChangeShelf = (event) => {
    if (book.shelf === event.target.value) {
      return;
    }
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
          <select value={book.shelf} onChange={onChangeShelf}>
            {shelves.map((shelf) => {
              return (
                <option
                  key={shelf.id}
                  value={shelf.shelfName}
                  disabled={shelf.isDisable}
                >
                  {shelf.shelfDisplayName}
                </option>
              );
            })}
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
  onUpdated: PropTypes.func.isRequired,
};

export default BookDetails;
