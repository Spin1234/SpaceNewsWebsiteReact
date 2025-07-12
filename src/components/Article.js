import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchArticle = async () => {
        const response = await fetch(`https://flask-space-news-backend.onrender.com/get_article/${slug}`);
        const result = await response.json();
        setArticle(result);
        setLoading(false);
      };

    fetchArticle();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!article || article.error) return <p>Article not found.</p>;

  return (
    <div className="container mt-4">
      <h2>{article.title}</h2>
      <p style={{ whiteSpace: 'pre-wrap' }}>{article.content}</p>
    </div>
  );
};

export default Article;
