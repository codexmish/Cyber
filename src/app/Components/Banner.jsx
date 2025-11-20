import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <section id="banner" className="bg-[#211C24] px-4 lg:px-0">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="text w-full lg:w-[714] flex flex-col gap-6 mt-24 lg:mt-0 text-center lg:text-start items-center lg:items-start">
            <h2 className="text-2xl text-secText font-semibold">Pro.Beyond.</h2>
            <h1 className="text-7xl lg:text-8xl text-white font-thin">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <p className="text-[18px] text-secText font-medium">
              Created to change everything for the better. For everyone
            </p>
            <button className="w-[191px] h-[57px] flex items-center justify-center text-base text-white hover:text-black hover:bg-white font-medium border border-white rounded-md cursor-pointer">
              Shop Now
            </button>
          </div>
          <div className="img">
            <Image
              width={406}
              height={432}
              src="/images/Iphone Image.png"
              alt="banner-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
