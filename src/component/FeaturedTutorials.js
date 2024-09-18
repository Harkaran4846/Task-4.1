import React from 'react';

const tutorials = [
  { name: 'JS6 Basics', description: 'JavaScript ES6 Basics', rating: 5, username: 'coder123' },
  { name: 'React Router', description: 'Understanding React Router', rating: 5, username: 'dev_guru' },
  { name: 'Express JS', description: 'Introduction to Express JS', rating: 4.9, username: 'node_master' },
  { name: 'React Router', description: 'Detailed React Router', rating: 5, username: 'dev_expert' },
];

const FeaturedTutorials = () => {
  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorials-grid">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <img src={`https://picsum.photos/200/150?random=${index + 4}`} alt="Tutorial" />
            <h3>{tutorial.name}</h3>
            <p>{tutorial.description}</p>
            <p>⭐ {tutorial.rating} - {tutorial.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTutorials;
