import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchPage from "./components/SearchPage";
import { useState } from "react";

function App() {
  const [bookShelfs, setBookShelfs] = useState({});

  const onUpdateShelf = (shelfs) => {
    setBookShelfs(shelfs);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ListBooks saveShelfs={onUpdateShelf} />}
      />
      <Route path="/search" element={<SearchPage shelfs={bookShelfs} />} />
    </Routes>
  );
}

export default App;
