import React from "react";
import ProductCard from "./common/ProductCard";

const DiscountProduct = async () => {
  const mydata = await fetch(
    `https://dummyjson.com/products/category/smartphones`,
    {
      cache: "no-store",
    }
  );
  const discountProducts = await mydata.json();

  return (
    <>
      <section className="py-10 px-4 lg:px-0">
        <div className="container">
          <h3 className="text-2xl text-black font-medium">
            Discounts up to -50%
          </h3>

          <div className="all flex flex-wrap items-center justify-between mt-8 gap-4 lg:gap-10">
            {discountProducts.products.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                img={item.thumbnail}
                titel={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscountProduct;
