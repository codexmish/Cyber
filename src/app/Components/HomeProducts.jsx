import React from "react";
import NewArrival from "./NewArrival";
import BestSellers from "./BestSellers";
import Featured from "./Featured";

const HomeProducts = () => {
  return (
    <>
      <div className="container">
        <NewArrival />
        <BestSellers />
        <Featured />
      </div>
    </>
  );
};

export default HomeProducts;
