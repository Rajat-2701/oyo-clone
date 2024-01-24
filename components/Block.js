import React from "react";
import OyoLogo from "../public/demo.svg";
import Image from "next/image";

const Block = ({ title, para }) => {
  return (
    <div className="w-full h-full border-r border-r-gray-300 px-3 gap-2 flex items-center">
      <Image src={OyoLogo} priority width={200} height={200} className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
