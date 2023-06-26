import React, { useState } from "react";
import bannerHero from "../../assets/bannerHero.jpg";
import ShoppingProducts from "../ShoppingProducts/ShoppingProducts";
import { BiFilter } from "react-icons/bi";
import Filters from "../../Components/Filters/Filters";

const StartShopping = () => {
  const [filterToggle, setFilterToggle] = useState(false);

  return (
    <>
      <div className="mt-6 mb-4 px-32 min-h-screen">
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
                className="w-max py-1 px-2 rounded-md cursor-pointer shadow-md   hover:shadow-lg "
              >
                <option value="" defaultValue="" disabled>
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
