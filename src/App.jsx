import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Raccoons from "./pages/Raccoons/Raccoons";
import RaccoonDetail from "./pages/Raccoons/RaccoonDetail";
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
import Page404 from "./pages/404";
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
          <Route path="login" element={<Login />} />
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
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
