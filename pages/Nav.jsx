import React from "react"
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div>
    <div className="navbar-container">
      <h1 className="title">CockTails</h1>
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link> 
      </nav>
    </div>
    </div>
  )
};