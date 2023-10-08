import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ListBooks />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
