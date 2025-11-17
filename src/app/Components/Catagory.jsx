import React from "react";
import CommonCatagory from "./common/CommonCatagory";
import { catagoryItems } from "../../../constants";

const Catagory = () => {
  return (
    <>
      <section id="catagory" className="bg-[#FAFAFA] py-20 px-4 lg:px-0">
        <div className="container">
          <h2 className="text-2xl text-black font-medium mb-8">
            Browse By Category
          </h2>

          <div className="flex flex-wrap items-center gap-4 lg:gap-8 justify-between">
            {catagoryItems.map((item, id) => (
              <CommonCatagory key={id} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catagory;
