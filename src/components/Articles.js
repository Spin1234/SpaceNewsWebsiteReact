import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch("https://flask-space-news-backend.onrender.com/get_articles");
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Articles</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((article) => (
          <div key={article._id}>
            <h4>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </h4>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Articles;
