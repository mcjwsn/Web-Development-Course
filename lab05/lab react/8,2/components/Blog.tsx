import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    setArticles(storedArticles);
  }, []);

  return (
    <div className="blog">
      <h1>Lista artykułów</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/dodaj" className="btn">Dodaj nowy artykuł</Link>
    </div>
  );
}

export default Blog;
