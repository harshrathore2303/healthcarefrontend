import React from "react";
import Button from "./Button";

const BuyCard = ({ title, source }) => {
  return (
    <div className="m-6 h-80 w-60 flex flex-col items-center justify-between">
      <div className="bg-[#F4F6FA]">
        <img src={source} alt="" className="w-[200px] h-[200px]" />
      </div>
      <h3 className="font-bold">{title}</h3>
      <img src="../assets/stars.png"/> 
      <Button className="border border-[#1A69BE] text-[#1A69BE] p-2 text-xl m-2 hover:bg-[#1A69BE] hover:text-white">
        Shop Now
      </Button>
    </div>
  );
};

export default BuyCard;
