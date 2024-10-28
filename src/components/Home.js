import React from 'react'; 
import '../PageStyles.css';
import imageOne from '../images/image_one.png'; 
const Home = () => (
    <div className="page home">
      <h2  className="home-text">Welcome to my site!</h2>
      <img
        src={imageOne} 
        alt="Welcome"
        className="home-image"
      />
    </div>
);

export default Home;
