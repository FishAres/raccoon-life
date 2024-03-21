import React from "react";
import { NavLink } from "react-router-dom";

export default function BetterLink(props) {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#ff8c38",
  };
  return (
    <NavLink
      {...props} // hah knew you could do this!
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      {props.children}
    </NavLink>
  );
}
