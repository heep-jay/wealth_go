import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <h1 className="nav-logo">WealthGo</h1>
        <ul className="nav-links">
          <li className="nav-listItems">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-listItems">
            <Link to="/faq">About Us</Link>
          </li>
          <li className="nav-listItems">
            <Link to="">Plans</Link>
          </li>
          <li className="nav-listItems">
            <Link to="">Contact</Link>
          </li>
          <li className="nav-listItems">
            <button className="nav-btn">Sign In</button>
          </li>
        </ul>
        <div className="nav-menu">
          <MenuIcon
            sx={{
              cursor: "pointer",
              color: "#5BA601",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
