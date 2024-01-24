"use client";
import Image from "next/image";
import React from "react";

const MiddleSection = () => {
  return (
    <div className="flex my-14 items-center border border-gray-300 px-5 justify-between rounded-lg">
      <div className="flex items-center">
        <Image
          src={`/fire.jpg`}
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-3"
        />
        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals.</p>
          <p className="text-gray-500 mt-1">
            Only the best deals reach your inbox
          </p>
        </div>
      </div>
      <div className="flex">
        <input
          type="email"
          className="px-4 py-2 outline-none border border-gray-300 rounded-lg mr-5"
          placeholder="eg. john@example.com"
        />
        <button className="w-48 rounded-lg hover:bg-red-400 transition-all duration-300 ease-in-out h-14 text-white bg-red-500 cursor-pointer text-xl">Notify Me</button>
      </div>
    </div>
  );
};

export default MiddleSection;
