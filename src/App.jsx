import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Raccoons from "./pages/Raccoons";
import RaccoonDetail from "./pages/RaccoonDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostRaccoons from "./pages/Host/HostRaccoons";
import HostRaccoonDetail from "./pages/Host/HostRaccoonDetail";
import HostLayout from "./components/HostLayout";
import HostRaccoonDesc from "./components/HostRaccoonDesc";
import HostRaccoonPhotos from "./components/HostRaccoonPhotos";
import HostRaccoonPrice from "./components/HostRaccoonPrice";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="raccoons" element={<Raccoons />} />
          <Route path="raccoons/:id" element={<RaccoonDetail />} />
          {/* Relative paths are implied if wrapped in
          a parent route */}
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="raccoons" element={<HostRaccoons />} />
            <Route path="raccoons/:id" element={<HostRaccoonDetail />}>
              <Route index element={<HostRaccoonDesc />} />
              <Route path="pricing" element={<HostRaccoonPrice />} />
              <Route path="photos" element={<HostRaccoonPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
