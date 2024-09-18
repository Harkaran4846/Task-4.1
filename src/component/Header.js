import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">DEV@Deakin</div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="header-buttons">
          <button>Post</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
