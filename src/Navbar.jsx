import React from "react";
import { Link } from "react-router-dom";
import littelemonLogo from "./assets/img/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="">
        <img className="logo" src={littelemonLogo} alt="" />
      </a>
      <ul>
        <li className="nav-link">
          <Link className="linkA" to="/">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link className="linkA" to="/about">
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link className="linkA" to="/menu">
            Menu
          </Link>
        </li>
        <li className="nav-link">
          <Link className="linkA" to="/reservation">
            Reservation
          </Link>
        </li>
        <li className="nav-link">
          <Link className="linkA" to="/orderOnline">
            Order Online
          </Link>
        </li>
        <li className="nav-link">
          <a className="linkA" href="">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
