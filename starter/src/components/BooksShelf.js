import { useState } from "react";
import BookDetails from "./BookDetails";

const BooksShelf = ({ title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.bookId} className="book">
              <BookDetails book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
