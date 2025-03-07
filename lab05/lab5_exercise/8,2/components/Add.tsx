import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const submiting = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      title,
      content,
    };
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    storedArticles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(storedArticles));
    navigate("/blog");
  };

  return (
    <div className="add-article">
      <h1>Doda artykuł</h1>
      <form onSubmit={submiting}>
        <label>Tytul</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Tresc</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">Dodaj</button>
      </form>
    </div>
  );
}

export default Add;
