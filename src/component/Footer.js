import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="signup">
        <h4>SIGN UP FOR OUR DAILY INSIDER</h4>
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <div className="explore">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social">
          <h4>Stay connected</h4>
          <div className="social-icons">
            <i className="facebook icon"></i>
            <i className="twitter icon"></i>
            <i className="instagram icon"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2022 | Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </div>
  );
};

export default Footer;
