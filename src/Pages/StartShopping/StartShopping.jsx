import React, { useEffect, useState } from "react";
import bannerHero from "../../assets/bannerHero.jpg";
import ShoppingProducts from "../ShoppingProducts/ShoppingProducts";
import { BiFilter } from "react-icons/bi";
import Filters from "../../Components/Filters/Filters";
import Navbar from "../../Components/navbar/Navbar";
import { Glasses } from "../ShoppingProducts/products";
import { useFilters } from "../FilterContext/FilterContext";

const StartShopping = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const { setSortByPrice } = useFilters();

  const sortProductsByPrice = () => {
    let sortedProducts = [...Glasses];

    if (selectValue === "low_to_high") {
      sortedProducts.sort((a, b) => a.newPrice - b.newPrice);
    } else if (selectValue === "high_to_low") {
      sortedProducts.sort((a, b) => b.newPrice - a.newPrice);
    }

    setSortByPrice(sortedProducts);
  };

  useEffect(sortProductsByPrice, [selectValue, setSortByPrice]);

  return (
    <>
      <Navbar />
      <div className="pt-20 mb-4 px-32 min-h-screen ">
        <div>
          <img
            src={bannerHero}
            alt="bannerHero"
            className="rounded-md h-full min-h-[10rem] object-cover  "
          />
        </div>
        <div className="py-5 flex flex-col md:flex-row gap-2 justify-between ">
          <p className="text-2xl font-bold">Glasses For You!</p>
          <Filters
            filterToggle={filterToggle}
            setFilterToggle={setFilterToggle}
          />
          <div className="flex gap-8 items-center">
            <label>
              <select
                name="sortBy"
                className="w-max py-1 px-2 rounded-md cursor-pointer shadow-md hover:shadow-lg"
                onChange={(e) => setSelectValue(e.target.value)}
                onClick={sortProductsByPrice}
              >
                <option value="" disabled>
                  Sort By Price
                </option>
                <option value="low_to_high">Low to High</option>
                <option value="high_to_low">High to Low</option>
              </select>
            </label>
            <button
              className="flex py-1 px-2 rounded-md shadow-md items-center  gap-1 hover:bg-[--primary-text-color] hover:text-white hover:shadow-lg"
              onClick={() => setFilterToggle(true)}
            >
              <BiFilter className="text-lg" />
              <p className="text-sm">Filters</p>
            </button>
          </div>
        </div>
        <ShoppingProducts />
      </div>
    </>
  );
};

export default StartShopping;
