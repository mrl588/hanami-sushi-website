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
    // Remove all touched classes when closing menu
    const containers = document.querySelectorAll('.mobile-nav-link-container');
    containers.forEach(container => {
      container.classList.remove('touched');
    });
    setMenuOpen(false);
  };

  return (
    <header className="relative z-20 text-black">
      <div className="bg-[#6A0302] text-[#f4eadc]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2 text-[0.65rem] tracking-[0.2em] sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=114%20East%20Main%20St%2C%20Clinton%2C%20CT%2006413"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            114 East Main St • Clinton, CT 06413
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
            onClick={() => {
              // Remove all touched classes when opening/closing menu
              const containers = document.querySelectorAll('.mobile-nav-link-container');
              containers.forEach(container => {
                container.classList.remove('touched');
              });
              setMenuOpen(!menuOpen);
            }}
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
            onClick={() => {
              // Remove all touched classes when opening/closing menu
              const containers = document.querySelectorAll('.mobile-nav-link-container');
              containers.forEach(container => {
                container.classList.remove('touched');
              });
              setMenuOpen(!menuOpen);
            }}
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
        className={`fixed inset-0 z-40 bg-[#f4eadc] md:hidden mobile-menu-overlay ${
          menuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        {/* Navigation links */}
        <nav className="flex flex-col items-center justify-center h-full w-full px-4 py-20 pb-32">
          {navItems.map((item, index) => {
            const letters = item.label.split('');
            const containerDelay = index * 150;
            const letterStartDelay = containerDelay + 400; // Start letters after container animation completes
            
            return item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="mobile-nav-link-container mb-6 sm:mb-8"
                style={{
                  animationDelay: menuOpen ? `${containerDelay}ms` : '0ms',
                }}
                onClick={(e) => {
                  // Remove touched class after a short delay to show underline briefly
                  setTimeout(() => {
                    e.currentTarget.classList.remove('touched');
                  }, 200);
                  closeMenu();
                }}
                onMouseDown={(e) => e.currentTarget.classList.add('touched')}
                onMouseUp={(e) => {
                  setTimeout(() => e.currentTarget.classList.remove('touched'), 300);
                }}
                onTouchStart={(e) => e.currentTarget.classList.add('touched')}
                onTouchEnd={(e) => {
                  setTimeout(() => e.currentTarget.classList.remove('touched'), 300);
                }}
              >
                <span className="mobile-nav-link text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.3em] font-medium text-black inline-block">
                  {letters.map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`mobile-nav-letter ${
                        menuOpen ? 'mobile-nav-letter-visible' : ''
                      }`}
                      style={{
                        animationDelay: menuOpen 
                          ? `${letterStartDelay + letterIndex * 30}ms` 
                          : '0ms',
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link-container mb-6 sm:mb-8"
                style={{
                  animationDelay: menuOpen ? `${containerDelay}ms` : '0ms',
                }}
                onClick={(e) => {
                  // Remove touched class after a short delay to show underline briefly
                  setTimeout(() => {
                    e.currentTarget.classList.remove('touched');
                  }, 200);
                  closeMenu();
                }}
                onMouseDown={(e) => e.currentTarget.classList.add('touched')}
                onMouseUp={(e) => {
                  setTimeout(() => e.currentTarget.classList.remove('touched'), 300);
                }}
                onTouchStart={(e) => e.currentTarget.classList.add('touched')}
                onTouchEnd={(e) => {
                  setTimeout(() => e.currentTarget.classList.remove('touched'), 300);
                }}
          >
            <span className="mobile-nav-link text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.3em] font-medium text-black inline-block">
              {letters.map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`mobile-nav-letter ${
                    menuOpen ? 'mobile-nav-letter-visible' : ''
                  }`}
                  style={{
                    animationDelay: menuOpen 
                      ? `${letterStartDelay + letterIndex * 30}ms` 
                      : '0ms',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </a>
            );
          })}
          
          {/* Divider */}
          <div className="mobile-nav-divider w-[80%] h-px bg-black/20 my-6 mx-auto"></div>
          
          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=114%20East%20Main%20St%2C%20Clinton%2C%20CT%2006413"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-address text-sm text-black/70 transition hover:text-black"
            style={{ fontFamily: '"Aleo", serif' }}
          >
            114 East Main St • Clinton, CT 06413
          </a>
        </nav>
        
        {/* Mobile menu footer */}
        <div className="mobile-menu-footer absolute bottom-0 left-0 right-0 bg-[#6A0302] text-[#f4eadc]">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-4 py-4">
            <a
              href="https://www.instagram.com/hanamijapanese/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/hanamict/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
