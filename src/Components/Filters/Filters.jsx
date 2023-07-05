import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useFilters } from "../../Pages/FilterContext/FilterContext";
import { Glasses } from "../../Pages/ShoppingProducts/products";

const Filters = ({ setFilterToggle, filterToggle }) => {
  const [genderFilter, setGenderFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState(4999);
  const [categoryFilters, setCategoryFilters] = useState([]);

  const { setSortByPrice } = useFilters();

  const handleGenderFilter = (value) => {
    setGenderFilter(value);
  };

  const handlePriceRangeFilter = (e) => {
    setPriceRangeFilter(parseInt(e.target.value));
  };

  const handleCategoryFilter = (category, checked) => {
    if (checked) {
      setCategoryFilters((prevFilters) => [...prevFilters, category]);
    } else {
      setCategoryFilters((prevFilters) =>
        prevFilters.filter((item) => item !== category)
      );
    }
  };

  const clearFilters = () => {
    setGenderFilter("");
    setPriceRangeFilter(4999);
    setCategoryFilters([]);
  };

  useEffect(() => {
    // Filter the Glasses array based on the selected filters
    const filteredGlasses = Glasses.filter((glass) => {
      // Gender filter
      if (genderFilter !== "" && glass.gender !== genderFilter) {
        console.log(glass.gender);

        return false;
      }
      // Price range filter
      if (glass.newPrice > priceRangeFilter) {
        return false;
      }
      // Category filters
      if (
        categoryFilters.length > 0 &&
        !categoryFilters.includes(glass.category)
      ) {
        return false;
      }
      return true;
    });

    // Call setSortByPrice with the filtered array
    setSortByPrice(filteredGlasses);
  }, [genderFilter, priceRangeFilter, categoryFilters, setSortByPrice]);

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
        <button
          className="py-0.5 px-2 w-16 text-center bg-black/[0.2]  text-sm font-semibold shadow-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          onClick={clearFilters}
        >
          Clear
        </button>

        <div className="py-3">
          <h1 className="text-xl mb-4">Gender</h1>

          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            <button
              className={`p-2 rounded-md shadow-sm text-center capitalize ${
                genderFilter === ""
                  ? "bg-[--primary-text-color] text-white"
                  : "bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white"
              } cursor-pointer`}
              onClick={() => handleGenderFilter("")}
            >
              All
            </button>
            <button
              className={`p-2 rounded-md shadow-sm text-center capitalize ${
                genderFilter === "male"
                  ? "bg-[--primary-text-color] text-white"
                  : "bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white"
              } cursor-pointer`}
              onClick={() => handleGenderFilter("Men")}
            >
              Male
            </button>
            <button
              className={`p-2 rounded-md shadow-sm text-center capitalize ${
                genderFilter === "female"
                  ? "bg-[--primary-text-color] text-white"
                  : "bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white"
              } cursor-pointer`}
              onClick={() => handleGenderFilter("Women")}
            >
              Female
            </button>
            <button
              className={`p-2 rounded-md shadow-sm text-center capitalize ${
                genderFilter === "unisex"
                  ? "bg-[--primary-text-color] text-white"
                  : "bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white"
              } cursor-pointer`}
              onClick={() => handleGenderFilter("Unisex")}
            >
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
                value={priceRangeFilter}
                onChange={handlePriceRangeFilter}
              />
              <div className="w-full flex justify-between p-0">
                <span>0</span>
                <span>{Math.floor(priceRangeFilter / 2)}</span>
                <span></span>
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
                checked={Glasses.includes("vision")}
                onChange={(e) =>
                  handleCategoryFilter("vision", e.target.checked)
                }
              />
              Vision
            </label>
            <label className="capitalize cursor-pointer">
              <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="categories"
                checked={Glasses.includes("sunglasses")}
                onChange={(e) =>
                  handleCategoryFilter("sunglasses", e.target.checked)
                }
              />
              Sunglasses
            </label>
            <label className="capitalize cursor-pointer">
              <input
                className="accent-[--primary-text-color] me-2 cursor-pointer"
                type="checkbox"
                name="categories"
                checked={Glasses.includes("sports")}
                onChange={(e) =>
                  handleCategoryFilter("sports", e.target.checked)
                }
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
