import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top" style={{backgroundColor: "#071740", position: "sticky"}} id="mainNav">
            <div class="container">

        <img img class="logo3" src="../logo.svg" alt="" /><a class="brand-logo navbar-brand js-scroll-trigger" href="#page-top"><p class="navName brand-logo">MU Women In Stem</p></a>
        
        <button class="navbar-toggler navbar-toggler-right bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>

                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1"> <Link to="/" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">About</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"> <Link to="/events" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Events</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"> <Link to="/news" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">News</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"> <Link to="/blogs" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Blogs</Link></li>
                   </ul>
                </div>
            </div>
        </nav>
        </div>
   );
};

export default Navbar;
