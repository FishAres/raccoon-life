import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* this is so weird */}
      </main>
      <footer>AWW YISS RACCOONS</footer>
    </>
  );
}
