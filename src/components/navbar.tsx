import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="navbar navbar-expand-md fixed-top"
      style={{
        background: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(5px)",
        maskImage: "linear-gradient(black 80%, transparent)",
      }}
    >
      <div className="container d-flex justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav gap-5 mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#professional-projects">
                Professional Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#academic-projects">
                Academic Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#honors">
                Honors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
