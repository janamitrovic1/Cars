import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#3c0029] text-[#f5c3b8]">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-[#a6787e]">
        {/* Logo */}
        <div className="text-2xl font-bold">CARS</div>

        {/* Search bar */}
        <div className="search-bar">
          <span className="text-[#f5c3b8] text-lg mr-3">🔍</span>
          <input
            type="text"
            placeholder="Pretraži"
            className="flex-1 bg-transparent text-[#f5c3b8] placeholder-[#f5c3b8] focus:outline-none"
          />
          <span className="text-[#f5c3b8] text-lg ml-3">⚙️</span>
        </div>

        {/* Icons */}
        <div className="icons">
          <span className="text-lg">❤️</span>
          <span className="text-lg">⚙️</span>
          <img
            src="https://via.placeholder.com/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-10">
        <div className="relative w-full max-w-5xl">
          {/* Text in the background */}
          <h1 className="absolute inset-0 text-[150px] font-extrabold text-[#5c3a50] opacity-20">
            CARS
          </h1>

          {/* Car image */}
          <img
            src="/bmw.png"
            // alt="Car"
            className="relative z-10 mx-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
