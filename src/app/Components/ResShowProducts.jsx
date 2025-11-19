"use client";
import React from "react";
import { showCaseData } from "../../../constants";
import ShowcaseCard from "./common/ShowcaseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const ResShowProducts = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="resshow py-14 px-4 lg:px-0 lg:hidden">
        <div className="">
          <Slider {...settings}>
            {showCaseData.map((item, id) => (
              <div>
                <ShowcaseCard
                  key={id}
                  img={item.image}
                  bg={item.bgColor}
                  titel={item.title}
                  description={item.description}
                  textColor={item.textColor}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ResShowProducts;
