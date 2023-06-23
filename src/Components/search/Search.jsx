import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex items-center bg-black/[0.075] px-3 w-96 rounded-full">
        <input
          type="text"
          placeholder="Search Glasses"
          className="w-full py-2 px-3 bg-transparent focus:outline-none"
        />
        <i className="fa-sharp fa-solid fa-magnifying-glass text-sm px-2"></i>
      </div>
    </>
  );
};

export default Search;
