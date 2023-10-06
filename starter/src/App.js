import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchPage from "./components/SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const results = await BooksAPI.getAll();
      setBooks(results);
      console.log(books);
    };

    fetchBooks();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<ListBooks books={books} />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
