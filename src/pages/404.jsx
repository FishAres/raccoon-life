import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <h1>BRAPCOON GOT YOU</h1>
      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          width: "60vh",
          height: "10vh",
          color: "#ffcc8d",
          fontWeight: 600,
          textDecoration: "none",
        }}>
        Escape!
      </Link>
    </div>
  );
}
