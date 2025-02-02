import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <h1>My Portfolio</h1>
      <nav className="nav-bar">
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/education">Education</Link> | 
        <Link to="/projects">Projects</Link> | 
        <Link to="/services">Services</Link> |
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <main>{children}</main>
    </div>
  );
}
