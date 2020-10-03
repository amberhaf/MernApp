import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light sticky-top" id="main-nav-bar">
    <a className="navbar-brand" href="#home">
        <img src="../logo.svg" className="logo3 navbar-sqnlogo d-inline-block align-top"/>
        <span className="brand-logo">MU Women in Stem</span>
    </a>
    <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img src="../bars.svg" className="menu"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" data-toggle="collapse" data-target="#navbarNav" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="collapse" data-target="#navbarNav" href="#about">News</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="collapse" data-target="#navbarNav" href="#whatwedo">Events</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="collapse" data-target="#navbarNav" href="#join">Blogs</a></li>
        </ul>
    </div>
</nav>
        </div>
   );
};

export default Navbar;
