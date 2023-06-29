import React from "react";
import emptyWish from "../../assets/empty-wish.gif";
import Navbar from "../../Components/navbar/Navbar";
import WishListProducts from "../WishListProducts/WishListProducts";
import { useAddToWishList } from "../WishListContext/WishListContext";

const WishList = () => {
  const { addToWishList } = useAddToWishList();

  return (
    <>
      <Navbar />
      <div className="px-32">
        {addToWishList.length > 0 ? (
          <div>
            <h1 className="text-2xl py-6 font-semibold text-gray-800">
              Wishlist
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {addToWishList.map((glasses) => {
                return <WishListProducts key={glasses.id} data={glasses} />;
              })}
            </div>
          </div>
        ) : (
          <div className="h-[65vh] w-full flex flex-col items-center justify-center pt-3">
            <img
              src={emptyWish}
              alt="empty-wishlist"
              className="w-full xs:w-1/2 sm:w-1/3"
            />
            <span className="font-sans text-xl  font-bold uppercase  tracking-wide text-gray-300">
              Nothing to Show!
            </span>
            <p className="text-gray-400">
              Unlock Your Shopping Desires: Fill Your Empty Wishlist
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
