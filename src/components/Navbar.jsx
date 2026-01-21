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

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      {isHomePage ? (
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-4 pt-6 text-black">
          <button
            className="absolute left-4 top-6 md:hidden"
            type="button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block h-0.5 w-6 bg-black" />
            <span className="mt-1 block h-0.5 w-6 bg-black" />
            <span className="mt-1 block h-0.5 w-6 bg-black" />
          </button>

          <Link
            to="/"
            className="brand-title text-2xl uppercase tracking-[0.4em]"
          >
            Hanami
          </Link>

          <nav className="mt-6 hidden justify-center gap-10 text-xs uppercase tracking-[0.3em] md:flex md:text-sm">
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
        <div className="relative w-full pb-4 pt-6 text-black">
          <div 
            className="fixed top-6 left-0 z-10"
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
          
          <button
            className="absolute left-40 top-8 md:left-48 md:top-10 md:hidden"
            type="button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block h-0.5 w-6 bg-black" />
            <span className="mt-1 block h-0.5 w-6 bg-black" />
            <span className="mt-1 block h-0.5 w-6 bg-black" />
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

      {menuOpen && (
        <button
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          type="button"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <aside
        className={`fixed left-0 top-0 z-30 h-full w-64 bg-[#f5f0e7] px-6 py-8 text-black transition-transform md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-end">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.25em] text-black/80">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="nav-link font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="nav-link font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </aside>
    </header>
  );
}
