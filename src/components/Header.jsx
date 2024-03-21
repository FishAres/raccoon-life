import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #RACCOONLIFE
      </Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/raccoons">Raccoons</Link>
      </nav>
    </header>
  );
}
