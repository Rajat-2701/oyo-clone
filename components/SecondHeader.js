import React from "react";

const SecondHeader = () => {
  const lists = [
    {
      name: "Haryana",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Cheenai",
    },
  ];
  return (
    <div className="px-20 py-5 flex items-center justify-between bg-gray-100">
      {lists &&
        lists?.map((list, index) => <span key={index}>{list?.name}</span>)}
    </div>
  );
};

export default SecondHeader;
