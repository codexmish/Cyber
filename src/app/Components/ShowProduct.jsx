import React from "react";
import ShowcaseCard from "./common/ShowcaseCard";

const ShowProduct = () => {
  const showCaseData = [
    {
      image: "/images/popular.png",
      title: "Popular Products",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      bgColor: "bg-[#ffffff]",
      textColor: "black",
    },
    {
      image: "/images/ipad.png",
      title: "Ipad Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      bgColor: "bg-[#F9F9F9]",
      textColor: "black",
    },
    {
      image: "/images/galaxy.png",
      title: "Samsung Galaxy",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      bgColor: "bg-[#EAEAEA]",
      textColor: "black",
    },
    {
      image: "/images/macbook.png",
      title: "Macbook Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      bgColor: "bg-[#2C2C2C]",
      textColor: "white",
    },
  ];

  return (
    <>
      <section className="py-14">
        <div className="flex items-center">
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
