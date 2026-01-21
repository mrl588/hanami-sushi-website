import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import homeIcon from "../assets/SideHomeIcon.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const navItems = [
    { label: "Hours & Location", to: "/hours" },
    { label: "Gallery", to: "/gallery" },
    { label: "About", to: "/about" },
    { label: "Menu", to: "/menu" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-20 text-black">
      <div className="bg-[#6A0302] text-[#f4eadc]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=114%20East%20Main%20Street%2C%20Clinton%2C%20CT%2006413"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            114 East Main Street • Clinton, CT 06413
          </a>
          <a href="tel:+18606649268" className="transition hover:text-white">
            860.664.9268
          </a>
        </div>
      </div>
      {isHomePage ? (
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-4 pt-6">
          {/* Mobile hamburger/X button - top right, scales with device */}
          <button
            className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:hidden touch-manipulation"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 w-5 sm:w-6 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`mt-1 block h-0.5 w-5 sm:w-6 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`mt-1 block h-0.5 w-5 sm:w-6 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>

          <nav className="hidden justify-center gap-10 text-xs uppercase tracking-[0.3em] md:flex md:text-sm">
            {navItems.map((item) =>
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link font-medium transition ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link font-medium transition"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      ) : (
        <div className="relative w-full pb-4 pt-6">
          <div 
            className="fixed top-8 left-0 z-10"
            style={{ margin: 0, padding: 0, overflow: 'hidden', width: 'auto' }}
          >
            <Link
              to="/"
              style={{ display: 'block', margin: 0, padding: 0 }}
              aria-label="Go to home page"
            >
              <img
                src={homeIcon}
                alt="Home"
                className="h-48 w-auto md:h-60 home-icon-img"
                style={{ 
                  margin: 0, 
                  padding: 0, 
                  display: 'block',
                  marginRight: 0
                }}
              />
            </Link>
          </div>
          
          {/* Mobile hamburger/X button - top right, scales with device */}
          <button
            className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:hidden touch-manipulation"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 w-5 sm:w-6 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`mt-1 block h-0.5 w-5 sm:w-6 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`mt-1 block h-0.5 w-5 sm:w-6 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>

          <nav className="absolute right-12 top-6 hidden gap-6 text-xs uppercase tracking-[0.3em] md:flex md:gap-8 md:right-12 md:text-sm">
            {navItems.map((item) =>
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link font-medium transition ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link font-medium transition"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}

      {/* Mobile menu overlay - full width */}
      <div
        className={`fixed inset-0 z-40 bg-[#f4eadc] md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ display: menuOpen ? 'block' : 'none' }}
      >
        {/* Close button (X) at top right, scales with device */}
        <button
          className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 touch-manipulation"
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
        >
          <span className="block h-0.5 w-5 sm:w-6 bg-black rotate-45 translate-y-1.5" />
          <span className="block h-0.5 w-5 sm:w-6 bg-black -rotate-45 -translate-y-1.5" />
        </button>

        {/* Navigation links */}
        <nav className="flex flex-col items-center justify-center h-full w-full px-4 py-20">
          {navItems.map((item, index) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`mobile-nav-link text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.3em] font-medium text-black mb-6 sm:mb-8 ${
                  menuOpen ? 'mobile-nav-link-visible' : ''
                }`}
                style={{
                  animationDelay: menuOpen ? `${index * 100}ms` : '0ms',
                }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-nav-link text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.3em] font-medium text-black mb-6 sm:mb-8 ${
                  menuOpen ? 'mobile-nav-link-visible' : ''
                }`}
                style={{
                  animationDelay: menuOpen ? `${index * 100}ms` : '0ms',
                }}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
