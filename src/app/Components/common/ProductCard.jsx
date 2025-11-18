import Image from "next/image";
import React from "react";

const ProductCard = ({ img, titel, price }) => {
  return (
    <>
      <div className="w-[268px] h-[432px] bg-[#F6F6F6] flex flex-col items-center justify-center rounded-[9px]">
        <Image width={160} height={160} src={img} />
        <div className="det mt-4 mb-6">
          <h3 className="text-base text-black font-medium text-center">
            {titel}
          </h3>
          <h2 className="text-2xl text-black font-semibold text-center mt-4">
            {price}
          </h2>
        </div>

        <button className="w-[188px] h-[48px] rounded-[8px] bg-black text-sm text-white font-medium flex items-center justify-center">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductCard;
