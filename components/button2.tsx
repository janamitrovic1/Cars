import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#49243E ] text-[#DBAFA0]" style={{
      background: "radial-gradient(ellipse at center, #BB8493 0%, #49243E 60%)"
    }}>
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
        <div className="relative w-full">
          {/* Text in the background */}
          <h1
            className="absolute inset-5 text-[450px] font-extrabold text-[#FFFFFF] top-[-100px] opacity-30"
            >
            CARS
          </h1>

          {/* Car image */}
          <img
            src="/car.svg"
            // alt="Car"
            className="relative z-10 mx-auto mt-40 w-[750px]"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
