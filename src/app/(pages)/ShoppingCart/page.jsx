import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const page = () => {
  return (
    <>
      <section className="flex items-center justify-center py-[113px]">
        <div className="container">
          <div className="main flex flex-wrap items-start justify-between">
            {/* -----cart items----- */}
            <div className="left">
              <h2 className="text-2xl text-black font-semibold">
                Shopping Cart
              </h2>

              <div className="w-[536px] h-[138px] flex items-center justify-between border-b border-b-[#A3A3A3]">
                <div className="img">
                  <Image width={90} height={90} src="/images/galaxy.png" />
                </div>

                <div className="dedc w-[191px]">
                  <h2 className="text-base text-black font-medium mb-2">
                    Apple iPhone 14 Pro Max 128Gb Deep Purple
                  </h2>
                  <p className="text-sm text-black font-normal">
                    #25139526913984
                  </p>
                </div>

                <div className="quantity flex items-center gap-2">
                  <button className="w-6 h-6 flex items-center justify-center text-black text-sm ">
                    -
                  </button>
                  <h2 className="text-base">1</h2>
                  <button className="w-6 h-6 flex items-center justify-center text-black text-sm ">
                    +
                  </button>
                </div>

                <h2 className="text-[20px] text-black font-medium">$1399 </h2>

                <MdDeleteOutline className="text-2xl text-black font-normal" />
              </div>
              <div className="w-[536px] h-[138px] flex items-center justify-between border-b border-b-[#A3A3A3]">
                <div className="img">
                  <Image width={90} height={90} src="/images/galaxy.png" />
                </div>

                <div className="dedc w-[191px]">
                  <h2 className="text-base text-black font-medium mb-2">
                    Apple iPhone 14 Pro Max 128Gb Deep Purple
                  </h2>
                  <p className="text-sm text-black font-normal">
                    #25139526913984
                  </p>
                </div>

                <div className="quantity flex items-center gap-2">
                  <button className="w-6 h-6 flex items-center justify-center text-black text-sm ">
                    -
                  </button>
                  <h2 className="text-base">1</h2>
                  <button className="w-6 h-6 flex items-center justify-center text-black text-sm ">
                    +
                  </button>
                </div>

                <h2 className="text-[20px] text-black font-medium">$1399 </h2>

                <MdDeleteOutline className="text-2xl text-black font-normal" />
              </div>

              <div className="w-[536px] h-[138px] flex items-center justify-between border-b border-b-[#A3A3A3]">
                <div className="img">
                  <Image width={90} height={90} src="/images/galaxy.png" />
                </div>

                <div className="dedc w-[191px]">
                  <h2 className="text-base text-black font-medium mb-2">
                    Apple iPhone 14 Pro Max 128Gb Deep Purple
                  </h2>
                  <p className="text-sm text-black font-normal">
                    #25139526913984
                  </p>
                </div>

                <div className="quantity flex items-center gap-2">
                  <button className="w-6 h-6 flex items-center justify-center text-black text-sm ">
                    -
                  </button>
                  <h2 className="text-base">1</h2>
                  <button className="w-6 h-6 flex items-center justify-center text-black text-sm ">
                    +
                  </button>
                </div>

                <h2 className="text-[20px] text-black font-medium">$1399 </h2>

                <MdDeleteOutline className="text-2xl text-black font-normal" />
              </div>
            </div>

            {/* -------order summery---- */}
            <div className="right border border-[#A3A3A3] rounded-[10px] px-[65px] py-[65px]">
                <h2 className="text-2xl text-black font-semibold">
                Order Summery
              </h2>

              <div className="input mt-10">
                <h3 className="text-sm text-secText font-medium">Discount code / Promo code</h3>
                <div className="w-116 h-14 border border-[#A3A3A3] rounded-[7px] mt-2 px-4">
                    <input type="text" placeholder="Code" className="w-full h-full border-none outline-none text-sm text-black font-normal placeholder:text-secText"/>
                </div>
              </div>


              <div className="input mt-10">
                <h3 className="text-sm text-secText font-medium">Your bonus card number</h3>
                <div className="w-116 h-14 border border-[#A3A3A3] rounded-[7px] mt-2 flex items-center px-4">
                    <input type="text" placeholder="Enter Card Number" className="w-full h-full border-none outline-none text-sm text-black font-normal placeholder:text-secText"/>
                    <button className="w-19 h-8 text-xs text-black font-medium flex items-center justify-center border border-black rounded-[6px]">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
