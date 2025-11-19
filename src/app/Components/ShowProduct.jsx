import React from "react";
import ShowcaseCard from "./common/ShowcaseCard";
import { showCaseData } from "../../../constants";

const ShowProduct = () => {


  return (
    <>
      <section className="py-14 px-4 lg:px-0">
        <div className="flex items-center flex-wrap lg:flex-nowrap">
          {showCaseData.map((item, id) => (
            <ShowcaseCard
              key={id}
              img={item.image}
              bg={item.bgColor}
              titel={item.title}
              description={item.description}
              textColor={item.textColor}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ShowProduct;
