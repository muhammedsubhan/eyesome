import React, { useEffect, useState } from "react";
import { Glasses } from "../../Pages/ShoppingProducts/products";
import spinningLoaders from "../../assets/loaderBlack.svg";
import CartItemCard from "../../Pages/CartItemCard/CartItemCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    setTimeout(() => {
      const filteredGlasses = Glasses.filter((glass) =>
        glass.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredGlasses);
      setSearching(false);

    }, 2000);
  }, [search]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
    if (!showList) setShowList(true);
  };

  return (
    <>
      <div className="relative">
        <form
          className={`flex items-center bg-black/[0.075] px-3  ${
            search && showList ? "rounded-t-md" : "rounded-full"
          } text-sm transition`}
        >
          <input
            type="search"
            value={search}
            placeholder="Search Glasses"
            onChange={changeHandler}
            className="w-96 py-2 px-3 bg-transparent focus:outline-none"
          />
          <i className="fa-sharp fa-solid fa-magnifying-glass text-sm px-2"></i>
        </form>
        {search && showList && (
          <ul className="absolute bg-amber-50 w-full max-h-72 overflow-auto rounded-b-md z-10">
            {searching ? (
              <li className="h-10 flex items-center justify-center">
                <img src={spinningLoaders} alt="Searching..." />
              </li>
            ) : filteredData.length ? (
              filteredData.map((product) => (
                <li key={product.id} className="">
                  <CartItemCard
                    product={product}
                    isSearch={true}
                    setSearch={setSearch}
                  />
                </li>
              ))
            ) : (
              <li className="h-10 flex items-center justify-center">
                No Item to show
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;
