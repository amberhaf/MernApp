import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top" style={{backgroundColor: "#071740", position: "sticky"}} id="mainNav">
            <div className="container">
        <div className="title">    <img class="logo3" src="../logo.svg" alt="" /><a class="brand-logo navbar-brand js-scroll-trigger" href="#page-top"><a class="navName brand-logo">MU Women In Stem </a></a>
    <a className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars fa-2x"></i></a></div>
                <div className="collapse navbar-collapse navbar-expand" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1"> <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">About</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"> <Link to="/events" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Events</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"> <Link to="/news" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">News</Link></li>
                    <li className="nav-item mx-0 mx-lg-1"> <Link to="/blogs" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Blogs</Link></li>
                   </ul>
                </div>
            </div>
        </nav>
        </div>
   );
};

export default Navbar;
