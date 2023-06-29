import React from "react";
import { BsBookmarkHeart } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
const WishListProducts = ({ data }) => {
  return (
    <>
      <div
        className="flex flex-col xs:flex-row sm:flex-col  bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden
      cursor-pointer
      transition-transform
      hover:scale-[1.02] hover:shadow-lg"
      >
        <div className="flex items-center justify-center p-10 xs:p-5 sm:p-10 bg-black/[0.075]  xs:w-1/2 w-full sm:w-full">
          <img
            src={data.img}
            alt="sport"
            className="w-full object-cover xs:object-contain sm:object-cover h-28"
          />
        </div>
        <div className="flex justify-between py-4 px-4 leading-relaxed">
          <div>
            <h1 className="text-xl font-medium">{data.name}</h1>
            <div className="flex items-center gap-2">
              <p>{data.rating}</p>
              <GiRoundStar className=" text-yellow-400 mb-1" />
              <span className="text-xs text-gray-400">Rating</span>
            </div>
            <p className="text-sm text-gray-600">{data.brand}</p>
          </div>
          <div>
            <p className="text-amber-600">₹ {data.newPrice}</p>
            <small className="text-sm text-gray-600 line-through">
              {data.oldPrice}
            </small>
          </div>
        </div>
        <div className="w-full border-t flex justify-between items-center py-5 pt-6 px-4">
          <button className="border border-[--primary-text-color]  py-1.5 text-sm  rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition hover:shadow-md">
            Add To Bag
          </button>
          <button>
            <BsBookmarkHeart className="text-xl hover:text-rose-600 hover:shadow-md transition" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WishListProducts;
