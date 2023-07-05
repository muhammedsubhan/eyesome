import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { categoryList } from "../CategoryCard/categoryList";
const Category = ({ catRef }) => {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl  break-words text-center mt-10">
          Categories
        </h1>

        <div
          ref={catRef}
          className="flex justify-evenly xs:flex-col lg:flex-row flex-row items-center py-4 mt-8 gap-5 px-10"
        >
          {categoryList.map((category, index) => {
            return <CategoryCard key={index} data={category} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
