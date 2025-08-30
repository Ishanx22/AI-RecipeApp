import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header1">
      <div className="header-content">
        <div className="header-title">
          <span role="img" aria-label="genie"></span> 🧞‍♂️Recipe Genie
        </div>
        <nav className="nav-container">
          <button
            className={`nav-button ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className={`nav-button ${location.pathname === "/app" ? "active" : ""}`}
            onClick={() => navigate("/app")}
          >
            Generate Recipe
          </button>

          <button
            className={`nav-button ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <button
            className={`nav-button ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
