import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

// this is so weird
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
