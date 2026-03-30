import { useState } from "react";

const Header = ({ search, setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <p>Free shipping on orders over $100</p>
      </div>

      {/* MAIN HEADER */}
      <header className="header">
        {/* LEFT NAV */}
        <div className="nav-left desktop">
          <span>SHOP</span>
          <span>SKILLS</span>
          <span>STORIES</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </div>

        {/* LOGO */}
        <div className="logo">Saqlain's Store</div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          {/* SEARCH INPUT */}
          <div className="search-form">
            <input
              className="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setSearch(e.target.value);

                  // 🔥 THIS FIXES YOUR ISSUE
                  e.target.blur();
                }
              }}
            />

            {/* OPTIONAL SEARCH BUTTON */}
            <button
              className="search-btn"
              onClick={() => {
                setSearch(search);
              }}
            >
              🔍
            </button>
          </div>

          {/* MENU BUTTON */}
          <span
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </span>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <span>SHOP</span>
          <span>SKILLS</span>
          <span>STORIES</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </div>
      )}
    </>
  );
};

export default Header;