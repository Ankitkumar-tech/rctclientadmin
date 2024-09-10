// NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
           AdminPage
           
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                All Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/bhagwadgeeta"
                className="nav-links"
                onClick={handleClick}
              >
                Admins
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                Super Admin
              </Link>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
