import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BookingPage } from "./pages/BookingPage";
import { Menu } from "./pages/Menu";
import Footer from "./pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderOnline" element={<Menu />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
