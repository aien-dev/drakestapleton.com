import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/path", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/life", label: "About" },
  { to: "/interest", label: "Contact" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <NavLink to="/" className="brand" end aria-label="Drake Stapleton Home">
          <span className="brand-name">Drake Stapleton</span>
          <span className="brand-line">AI Architect &amp; Operator · Freedom Fighter</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="links desktop-links" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          ref={toggleButtonRef}
          type="button"
          className="mobile-nav-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        {/* Accessible Mobile Drawer */}
        {isOpen && (
          <div
            className="mobile-nav-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
        <div
          ref={menuRef}
          id="mobile-nav-menu"
          className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}
          aria-label="Mobile Navigation Menu"
          aria-hidden={!isOpen}
        >
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-brand">Menu</span>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
            >
              Home
            </NavLink>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mobile-drawer-divider" />
            <NavLink to="/evidence" className="mobile-nav-sublink">
              Evidence Hub
            </NavLink>
            <NavLink to="/atlas" className="mobile-nav-sublink">
              Atlas Continuity
            </NavLink>
            <NavLink to="/aegis" className="mobile-nav-sublink">
              AEGIS Defense
            </NavLink>
            <NavLink to="/aien" className="mobile-nav-sublink">
              AIEN Runtime
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
