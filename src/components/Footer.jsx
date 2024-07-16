import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Pet Expo</p>
                <div className="social-icons">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com/petexpo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f">Facebook</i>
                    </a>
                    <a href="https://www.instagram.com/petexpo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram">Instagram</i>
                    </a>
                    <a href="https://www.twitter.com/petexpo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter">Twitter</i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

