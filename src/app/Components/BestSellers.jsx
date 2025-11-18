import React from "react";
import ProductCard from "./common/ProductCard";

const BestSellers = async () => {
  const mydata = await fetch(
    `https://dummyjson.com/products/category/smartphones`,
    {
      cache: "no-store",
    }
  );
  const newProducts = await mydata.json();

  console.log(newProducts);

  return (
    <>
      <div className="main">
        <div className="all flex flex-wrap items-center justify-between gap-10">
          {newProducts.products.slice(10, 16).map((item) => (
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

export default BestSellers;
