import React from "react";

const SummerSale = () => {
  return (
    <>
      <section
        className="h-[448px] bg-center bg-cover  bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner2.png')" }}
      >
          <div className="text w-full lg:w-[714] flex flex-col gap-6 mt-24 lg:mt-0 text-center lg:text-start items-center justify-center">
            <h1 className="text-7xl lg:text-8xl text-white font-thin">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <p className="text-[18px] text-secText font-medium">
              Created to change everything for the better. For everyone
            </p>
            <button className="w-[191px] h-[57px] flex items-center justify-center text-base text-white hover:text-black hover:bg-white font-medium border border-white rounded-md">
              Shop Now
            </button>
          </div>
      </section>
    </>
  );
};

export default SummerSale;
