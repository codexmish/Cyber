import React from "react";

const CommonCatagory = ({ icon, text }) => {
  return (
    <>
      <div className="w-[146px] lg:w-[160px] h-[128px] bg-[#EDEDED] rounded-[15px] flex flex-col items-center justify-center gap-2">
        <div className="text-black text-5xl">{icon}</div>
        <h2 className="text-base text-black font-medium">{text}</h2>
      </div>
    </>
  );
};

export default CommonCatagory;
