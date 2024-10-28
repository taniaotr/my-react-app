import React from 'react';
import '../PageStyles.css';
import newsImage from '../images/image_two.jpg'; 

const News = () => (
  <div className="page news">
    <div className="news-item">
      <img src={newsImage} alt="News" className="news-image" />
      <div className="news-content">
        <h3 className="news-title">News</h3>
        <p className="news-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
);

export default News;
