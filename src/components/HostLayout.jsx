import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <Link to="Dashboard">Dashboard</Link>
        <Link to="Income">Income</Link>
        <Link to="Reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
