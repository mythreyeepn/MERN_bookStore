import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBooks from './components/AddBooks';
import Books from './components/Book/Books'
import BookDetail from "./components/Book/BookDetail";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/add" element={<AddBooks />} exact/>
          <Route path="/books" element={<Books />} exact/>
          <Route path="/about" element={<Home />} exact/>
          <Route path="/books/:id" element={<BookDetail />} exact/>
        </Routes>
      </main>
    </>
  );
}

export default App;
