import React from "react"
import Nav from "./Nav"
import Search from "./Search"
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
        <Nav />
        <Outlet />
    </main>
  );
}