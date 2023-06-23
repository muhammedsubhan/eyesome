import React from "react";
import TrendingProductsCard from "../TrendingProductsCard/TrendingProductsCard";
import { trendingProducts } from "../TrendingProductsCard/trendingproducts";

const TrendingProducts = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 py-4 mt-10 px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  break-words flex items-center w-[320px] p-10">
          Trending Products
        </h1>

        {trendingProducts.map((product, index) => {
          return <TrendingProductsCard key={index} data={product} />;
        })}
      </div>
    </>
  );
};

export default TrendingProducts;
