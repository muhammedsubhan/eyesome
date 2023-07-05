import React from "react";
import { useFilters } from "../../Pages/FilterContext/FilterContext";
import { useNavigate } from "react-router-dom";

//
const CategoryCard = ({ data }) => {
  const { setSortByPrice } = useFilters();

  const navigate = useNavigate();

  const categoryLists = [
    {
      id: "1",
      category: "vision",
    },
    {
      id: "2",
      category: "sports",
    },
    {
      id: "3",
      category: "sunglasses",
    },
  ];

  const handleCategory = () => {
    // Find the category object based on the data.category value
    const selectedCategory = categoryLists.find(
      (category) => category.category === data.category
    );

    if (selectedCategory) {
      // Filter the category name from categoryLists
      const filteredCategory = categoryLists.filter(
        (item) => item.category === selectedCategory.category
      );

      setSortByPrice(filteredCategory);
    } else {
      console.error("Category not found.");
    }

    navigate("/start-shopping");
  };
  return (
    <>
      <div
        onClick={handleCategory}
        className="flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden categoryContainer w-96"
      >
        <img
          src={data.img}
          alt="category"
          className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
        />

        <div
          className="
             flex flex-col w-full h-full justify-center items-center
            transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl"
        >
          <h1 className="text-4xl xs:text-6xl sm:text-8xl lg:text-6xl font-extrabold capitalize text-white shadow-sm p-3 break-all">
            {data.category}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
