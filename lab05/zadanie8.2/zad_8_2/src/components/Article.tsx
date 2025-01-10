import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Article() {
  const { id } = useParams();
  const [article, zmienArticle] = useState(null);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articles")!) || [];
    zmienArticle(storedArticles.find((artc) => artc.id == parseInt(id)));
  }, [id]);

  if (article) {
    return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <Link to="/blog" className="btn">Wróć do listy</Link>
    </div>
  );}

  return <div>Ni ma</div> ;
}

export default Article;
