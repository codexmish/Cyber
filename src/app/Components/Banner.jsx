import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <section id="banner" className="bg-[#211C24]">
        <div className="container flex items-center justify-center ">
          <div className="text w-[714] flex flex-col gap-6">
            <h2 className="text-2xl text-secText font-semibold">Pro.Beyond.</h2>
            <h1 className="text-8xl text-white font-thin">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <p className="text-[18px] text-secText font-medium">
              Created to change everything for the better. For everyone
            </p>
            <button className="w-[191px] h-[56px] flex items-center justify-center text-base text-white font-medium border border-white rounded-b-md">
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
