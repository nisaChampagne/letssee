import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => (
  <div className="subNav">
    <div className="subNav__menu">
        <NavLink to="/" className="subNav__link">Home</NavLink>
        <NavLink to="/About" className="subNav__link">About</NavLink>
        <NavLink to="/Projects" className="subNav__link">Projects</NavLink>
        <NavLink to="/Blog" className="subNav__link">Blog</NavLink>
        <NavLink to="/Resume" className="subNav__link">Resume</NavLink>
        <NavLink to="/Contact" className="subNav__link">Contact</NavLink>
    </div>
  </div>
)

export default Navbar;