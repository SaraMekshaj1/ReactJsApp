import "./Category.css";
import { NavLink } from 'react-router-dom';
import React from "react";

export const Category = () => {
  return (
    <div className="category-container">
      <h1>Select a Category</h1>
      <ul className="category-list">
        <li>
          <NavLink to="/category/cats" className="category-link">
            <div className="category-card">
              <img src="/src/assets/cat1img.jpg" alt="Cats" className="category-image" />
              <div className="category-title">Cats</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/dogs" className="category-link">
            <div className="category-card">
              <img src="/src/assets/dogimg34.jpg" alt="Dogs" className="category-image" />
              <div className="category-title">Dogs</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/birds" className="category-link">
            <div className="category-card">
              <img src="src/assets/bird1133.jpg" alt="Birds" className="category-image" />
              <div className="category-title">Birds</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
