import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Filters = ({ setFilterToggle, filterToggle }) => {
  return (
    <>
      <aside
        className={`filtersContainer fixed  top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto
        transition-all ease-in-out duration-300 ${
          filterToggle ? "left-0" : "-left-96"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Filter Products</h1>
          <AiOutlineClose
            className="text-xl cursor-pointer"
            onClick={() => setFilterToggle(!filterToggle)}
          />
        </div>
        <button className="py-0.5 px-2 w-16 text-center bg-black/[0.2]  text-sm font-semibold shadow-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors ">
          Clear
        </button>

        <div className="py-3">
          <h1 className="text-xl mb-4">Gender</h1>

          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            <button className="p-2 rounded-md  shadow-sm text-center capitalize bg-[--primary-text-color] text-white cursor-pointer">
              All
            </button>
            <button className="p-2 rounded-md  shadow-sm text-center capitalize bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white cursor-pointer">
              Male
            </button>
            <button className="p-2 rounded-md  shadow-sm text-center capitalize bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white cursor-pointer">
              Female
            </button>
            <button className="p-2 rounded-md  shadow-sm text-center capitalize bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white cursor-pointer">
              Unisex
            </button>
          </div>
        </div>
        <div className="py-3">
          <h1 className="text-xl mb-4">Price Range</h1>
          <div>
            <label>
              <input
                type="range"
                min="0"
                max="4999"
                step="200"
                name="priceRange"
                className="w-full accent-[--primary-text-color] cursor-pointer"
              />
              <div className="w-full flex justify-between p-0">
                <span>0</span>
                <span>{Math.floor(4999 / 2)}</span>
                <span>4999</span>
              </div>
            </label>
          </div>
        </div>

        <div className="py-3">
          <h1 className="text-xl mb-4">Categories</h1>
          <div className="flex flex-col gap-2">
            <label className="capitalize cursor-pointer">
              <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="categories"
              />
              Vision
            </label>
            <label className="capitalize cursor-pointer">
              <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="categories"
              />
              Sunglasses
            </label>
            <label className="capitalize cursor-pointer">
              <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="categories"
              />
              Sports
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Filters;
