import React from "react";

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-72">
      <div className="p-10">
        {/* Heading */}
        <h2 className="text-4xl text-center text-white font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        {/* Input area */}
        <div className="mx-10 grid grid-cols-5 my-5">
          <input
            type="text"
            placeholder="Search..."
            className="h-16 !border-r-2 !border-gray-400 col-span-2 !outline-none px-3 text-lg"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 !border-r-2 !border-gray-400 col-span-1 !outline-none px-3 text-lg"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 col-span-1 !outline-none px-3 text-lg"
          />
          <button className="h-16 px-3 py-2 col-span-1 bg-green-500 text-white hover:bg-green-600 text-xl transition-all duration-300 ease-in-out cursor-pointer">
            Search
          </button>
        </div>
        <div className="contine-search mx-10 flex my-5">
          <button className="h-16 px-3 py-2 text-white mr-5">
            Continue your search
          </button>
          <button className="h-16 px-3 py-2 text-white mr-5 hover:bg-slate-500 transition-all duration-300 ease-in-out cursor-pointer border-2 border-white rounded-2xl">
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
