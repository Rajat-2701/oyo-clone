import Image from "next/image";
import React from "react";
import OyoLogo from "../public/logo.png";
import Block from "./Block";

const TopHeader = () => {
  return (
    <div className="flex h-20 justify-between border-b-2 border-gray-300 items-center px-16">
      <Image
        alt="topheaderlogo"
        src={OyoLogo}
        width={200}
        height={200}
        priority
        className="h-24 w-24"
      />
      <div className="h-full flex">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        <Block
          title={"Oyo for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block
          title={"List your property "}
          para={"Start earning in 30 minutes."}
        />
        <Block title={"8328282888"} para={"Call Us to book now."} />
        <div className="flex items-center px-3 gap-2">
          <Image
            alt="topheaderlogo"
            src={OyoLogo}
            width={200}
            height={200}
            priority
            className="h-10 w-28"
          />
          <div className="font-bold">Login/Signup</div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
