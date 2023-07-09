import React from "react";
import { useProductById } from "../../Pages/ProductsContext/ProductsContext";
import { useNavigate } from "react-router-dom";

const TrendingProductsCard = ({ data }) => {
  const { setProductById } = useProductById();

  const navigate = useNavigate();

  const handleTrendingDetails = () => {
    setProductById(data);
    navigate("/product-details");
  };

  return (
    <>
      <div
        onClick={handleTrendingDetails}
        className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3"
      >
        <div className="flex flex-col justify-between items-center gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
          <div className="flex justify-between px-2 w-72">
            <h2 className="text-xl xs:text-base sm:text-xl font-bold">
              {data.name}
            </h2>
            <div>
              <p className="text-lg xs:text-base sm:text-lg font-bold">
                ₹{data.newPrice}
              </p>
              <small className="text-gray-600 text-sm text-end">
                {data.category}
              </small>
            </div>
          </div>
          <img
            src={data.img}
            alt="sports"
            className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
          />
        </div>
      </div>
    </>
  );
};

export default TrendingProductsCard;
