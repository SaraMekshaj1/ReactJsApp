import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleOptions = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <NavLink to="/" className="title">
        PET EXPO
      </NavLink>
      <div className="menu" onClick={toggleOptions}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
        <NavLink to="/category">Category</NavLink>
        </li>
        <li>
        <NavLink to="/pet-care-guide">Pet Care Guide</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
