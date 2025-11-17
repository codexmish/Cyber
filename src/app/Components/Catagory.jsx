import React from "react";
import CommonCatagory from "./common/CommonCatagory";
import { SlScreenSmartphone } from "react-icons/sl";
import { catagoryItems } from "../../../constants";

const Catagory = () => {
  return (
    <>
      <section id="catagory" className="bg-[#FAFAFA] py-20">
        <div className="container">
          <h2 className="text-2xl text-black font-medium mb-8">
            Browse By Category
          </h2>

          <div className="flex items-center gap-8 justify-between">
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
