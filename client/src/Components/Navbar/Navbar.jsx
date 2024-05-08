import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <h1 className="logo">
        <Link to="/">Metan</Link>
      </h1>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/contact">
            <button className="btn contact-btn">Contact us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
