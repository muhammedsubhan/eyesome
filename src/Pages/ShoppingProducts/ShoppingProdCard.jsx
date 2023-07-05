import React from "react";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiRoundStar } from "react-icons/gi";
import { useAddToWishList } from "../WishListContext/WishListContext";
import { Link } from "react-router-dom";
import { useProductById } from "../ProductsContext/ProductsContext";

const ShoppingProdCard = ({ data }) => {
  const { addWishList, addToWishList } = useAddToWishList();
  const { setProductById } = useProductById();

  const handleWishList = () => {
    addWishList(data);
    toast.success("Product Added To WishList");
  };

  const handleProductDetails = (data) => {
    setProductById(data);
  };

  const isInWishList = addToWishList.some((item) => item.id === data.id);

  return (
    <>
      <div
        onClick={() => handleProductDetails(data)}
        className="flex items-center justify-center flex-col xs:flex-row sm:flex-col  bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden
        cursor-pointer
        transition-transform
        hover:scale-[1.02] hover:shadow-lg w-[300px]"
      >
        <div className=" flex items-center justify-center p-10 xs:p-5 sm:p-10 bg-black/[0.075]  xs:w-1/2 w-full sm:w-full">
          <Link to="/product-details">
            <img
              src={data.img}
              alt=""
              className="w-full object-cover xs:object-contain sm:object-cover h-28"
            />
          </Link>
        </div>

        <div className="p-3 flex flex-col justify-between gap-2 mt-2 h-1/2 xs:h-full sm:h-1/2 xs:w-2/3 w-full sm:w-full">
          <div>
            <div className=" flex justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-medium">{data.name}</span>
                <span className="flex items-center gap-1">
                  <span>{data.rating}</span>

                  <GiRoundStar className=" text-yellow-400 mb-1" />
                  <span className="text-xs text-gray-400">Rating</span>
                </span>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-amber-600">₹{data.newPrice}</span>
                <span className="text-sm text-gray-600 line-through">
                  {data.oldPrice}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{data.brand}</p>
          </div>
          <div className="w-full pt-2 border-t flex justify-between items-center">
            <button
              className={`border border-[--primary-text-color]  py-1.5 text-sm  rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition hover:shadow-md disabled:cursor-not-allowed`}
            >
              Add to Bag
            </button>
            <button onClick={() => handleWishList(data.id)}>
              {isInWishList ? (
                <BsFillBookmarkHeartFill className="text-xl text-rose-600 hover:shadow-md transition" />
              ) : (
                <BsBookmarkHeart className="text-xl hover:text-rose-600 hover:shadow-md transition" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingProdCard;
