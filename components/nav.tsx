import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b border-[#a6787e] sticky top-0 z-20 bg-[#49243E] text-white">
          {/* Logo */}
          <div className="text-2xl font-bold"><Link href="/">CARS</Link></div>

          {/* Search bar */}
          <div className="search-bar">
            <span className="text-[#f5c3b8] text-lg mr-3"><img src="/search_setting.svg"/></span>
            <input
              type="text"
              placeholder="Pretraži"
              className="flex-1 bg-transparent text-[#f5c3b8] placeholder-[#f5c3b8] focus:outline-none"
            />
          </div>

          {/* Icons */}
          <div className="icons">
            <span className="text-lg"><img src="/heart.svg"/></span>
            <span className="text-lg"><img src="/cart.png" width={25}/></span>
            <img
              src="https://via.placeholder.com/32"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>
  );
};

export default Nav;