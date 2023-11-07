import React from "react";
import logo from "../assets/img/aa38384d3942a55696d8070552aed2f4c190fc14.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="" />
        <div>
          <p className="footerP">Navigation</p>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Reservations</a>
          <a href="">Order Online</a>
          <a href="">Login</a>
        </div>
        <div>
          <p className="footerP"> Contact</p>
          <a href="">Adress</a>
          <a href="">Number</a>
          <a href="">E-mail</a>
        </div>
        <div>
          <p className="footerP"> Social Media</p>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">X</a>
        </div>
      </footer>
    </>
  );
}
