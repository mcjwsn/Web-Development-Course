import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Article from "./components/Article";
import Add from "./components/Add";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<Article />} />

        <Route path="/dodaj" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;