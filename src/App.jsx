import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Raccoons from "./pages/Raccoons";
import RaccoonDetail from "./pages/RaccoonDetail";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #RACCOONLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/raccoons">Raccoons</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/raccoons" element={<Raccoons />} />
        <Route path="/raccoons/:id" element={<RaccoonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
