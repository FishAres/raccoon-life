import React from "react";
import { Outlet } from "react-router-dom";
import BetterLink from "./BetterLink";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <BetterLink to="dashboard">Dashboard</BetterLink>
        <BetterLink to="income">Income</BetterLink>
        <BetterLink to="reviews"> Reviews</BetterLink>
      </nav>
      <Outlet />
    </>
  );
}
