import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout"
import About from "./pages/About"
import Search from "./pages/Search"
import CocktailDetail from "./pages/CocktailDetail"
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Search />}/>
          <Route path="about" element={<About />} />
          <Route path="/:id" element={<CocktailDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)