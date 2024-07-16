import React from "react";
import './Home.css';
import photo from '/src/assets/pets.jpg';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-heading">
          Welcome to Pet Expo
        </h1>
        <p className="hero-text">
          Discover a world of adorable pets and learn everything about them. Browse through our extensive collection of information and photos about cats, dogs, and birds.
        </p>
        <img className="image-home" src={photo} alt="Home page photo" />
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>
            Thank you for visiting Pet Expo, your ultimate destination for discovering and learning about your favorite pets. Explore our website to find photos and information about cats, dogs, and birds.
          </p>
        </div>
      </footer>
    </div>
  );
};
