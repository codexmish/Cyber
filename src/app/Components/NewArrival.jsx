import React from "react";
import ProductCard from "./common/ProductCard";

const NewArrival = async () => {
  const mydata = await fetch(
    `https://dummyjson.com/products/category/smartphones`,
    {
      cache: "no-store",
    }
  );
  const newProducts = await mydata.json();
  return (
    <>
      <div className="main">
        <div className="all flex flex-wrap items-center justify-between gap-10">
          {newProducts.products.slice(0, 10).map((item) => (
            <ProductCard
              key={item.id}
              img={item.thumbnail}
              titel={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrival;
