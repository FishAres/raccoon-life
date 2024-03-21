import React from "react";
import { Link } from "react-router-dom";
import BetterLink from "./BetterLink";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #RACCOONLIFE
      </Link>
      <nav>
        <BetterLink to="/host">Host</BetterLink>
        <BetterLink to="/about">About</BetterLink>
        <BetterLink to="/raccoons">Raccoons</BetterLink>
      </nav>
    </header>
  );
}
