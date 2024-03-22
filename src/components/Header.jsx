import React from "react";
import { Link } from "react-router-dom";
import BetterLink from "./BetterLink";
import imageUrl from "../../public/assets/login-icon.png";

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
        <BetterLink to="/login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </BetterLink>
      </nav>
    </header>
  );
}
