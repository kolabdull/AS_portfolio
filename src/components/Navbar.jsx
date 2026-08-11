import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/"},
  { label: "Work", to: "/work" },
  { label: "Research", to: "/research" },
  { label: "Build", to: "/build" },
  { label: "Life", to: "/life" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setIsOpen(false)}
          aria-label="Home"
        >
          <span className="brand-mark">A-S</span>
          <span className="brand-name">KOLAWOLE.OS</span>
        </Link>

        <div className="system-status">
          <span className="status-dot" />
          <span>SYSTEM ONLINE</span>
          <span className="status-location">LAGOS, NG</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              <span className="nav-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;