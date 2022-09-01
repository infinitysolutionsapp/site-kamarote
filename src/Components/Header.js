
import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="container-fluid">

        <div className="logo">
          <h1><a href="index.html"></a></h1>
        </div>

        <button type="button" className="nav-toggle"><i className="bx bx-menu"></i></button>
        <nav className="nav-menu">
          <ul>
            <li className="active"><a href="#header" className="scrollto">Home</a></li>
            <li><a href="#about" className="scrollto">About Us</a></li>
            <li><a href="#why-us" className="scrollto">Why Us</a></li>
            <li><a href="#contact" className="scrollto">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;