import React from 'react';
import Header from './component/Header';
import FeaturedArticles from './component/FeaturedArticles';
import FeaturedTutorials from './component/FeaturedTutorials';
import Footer from './component/Footer';
import './styles.css';


function App() {
  return (
    <div>
      <Header />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Footer />
    </div>
  );
}

export default App;
