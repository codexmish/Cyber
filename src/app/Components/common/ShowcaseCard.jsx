import Image from "next/image";
import React from "react";

const ShowcaseCard = ({ img, bg, titel, description, textColor }) => {
  return (
    <>
      <div
        className={`w-full h-[640px] ${bg} flex flex-col items-center justify-between py-14 `}
      >
        <div className="img">
          <Image width={275} height={275} src={img} alt="product" />
        </div>
        <div className="text flex flex-col items-center lg:items-start gap-4 text-center lg:text-start">
          <h3 className={`text-[33px] text-${textColor} font-light`}>
            {titel}
          </h3>
          <p className="text-sm text-[#909090] font-medium max-w-[296px]">
            {description}
          </p>
          <button
            className={`w-[191px] h-[56px] flex items-center justify-center text-[18px] text-${textColor} font-medium border border-${textColor} rounded-[6px] cursor-pointer`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowcaseCard;
