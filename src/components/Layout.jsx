import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="body-div">
      <Header />
      <main>
        <Outlet /> {/* this is so weird */}
      </main>
      <div className="footer-pad"></div>
      <footer>AWW YISS RACCOONS</footer>
    </div>
  );
}
