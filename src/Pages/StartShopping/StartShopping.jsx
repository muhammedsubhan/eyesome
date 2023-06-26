import React from "react";
import bannerHero from "../../assets/bannerHero.jpg";
import ShoppingProducts from "../ShoppingProducts/ShoppingProducts";
const StartShopping = () => {
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

          <div className="flex gap-16">
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
            <div>filters</div>
          </div>
        </div>
        <ShoppingProducts />
      </div>
    </>
  );
};

export default StartShopping;
