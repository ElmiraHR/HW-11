// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <NavLink
              to="/"
              exact
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Articles
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}
