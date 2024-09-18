import React from 'react';

const articles = [
  { name: 'React vs Vue', description: 'Comparison of React and Vue', rating: 5, author: 'John Doe' },
  { name: 'NodeJS', description: 'Introduction to NodeJS', rating: 5, author: 'Jane Smith' },
  { name: 'React Hooks', description: 'A guide to React Hooks', rating: 5, author: 'Mark Johnson' },
  { name: 'JavaScript ES6', description: 'Mastering ES6 features', rating: 5, author: 'Mary Lane' },
];

const FeaturedArticles = () => {
  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={`https://picsum.photos/200/150?random=${index}`} alt="Article" />
            <h3>{article.name}</h3>
            <p>{article.description}</p>
            <p>⭐ {article.rating} - {article.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
