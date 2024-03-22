import React from "react";
import { Outlet } from "react-router-dom";
import BetterLink from "./BetterLink";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <BetterLink to="." end>
          {/*  end considered boolean when there's no input */}
          Dashboard
        </BetterLink>
        <BetterLink to="income">Income</BetterLink>
        <BetterLink to="raccoons">Your Raccoons</BetterLink>
        <BetterLink to="reviews"> Reviews</BetterLink>
      </nav>
      <Outlet />
    </>
  );
}
