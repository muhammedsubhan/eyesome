import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartItemCard = ({ product, isSearch }) => {
  return (
    <>
      <div
        onClick={() => console.log(product.id)}
        className={`m-auto flex flex-col gap-2  p-4 rounded-sm shadow-sm bg-white/[0.6] mb-2 max-w-xl ${
          isSearch ? "cursor-pointer hover:bg-black/5" : ""
        }`}
      >
        <div className="flex  items-center flex-wrap gap-2 w-full">
          <div className="flex flex-wrap xs:flex-nowrap justify-center xs:justify-start flex-1 items-center gap-5">
            <div
              className={` bg-black/[0.075] ${
                isSearch ? "h-14 w-14 " : "h-28 w-28"
              } rounded-md flex items-center`}
            >
              <img src={product.img} alt="" className="object-fit w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl py-3 font-semibold">{product.name}</h2>

              {!isSearch && (
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <span className="text-gray-700">Quantity: </span>
                    <button className="bg-[--primary-text-color] p-1 text-gray-100 rounded-md  text-xs disabled:cursor-not-allowed">
                      <AiOutlineMinus />
                    </button>
                    <span className="h-full w-10 bg-black/[0.075]  rounded-sm flex items-center justify-center">
                      {product.qty}
                    </span>
                    <button className="bg-[--primary-text-color] p-1 text-gray-100 rounded-md text-xs disabled:cursor-not-allowed">
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="flex gap-1 sm:gap-3  ">
                    <button className="btn-rounded-secondary  text-xs sm:text-sm mt-2 max-w-xs disabled:cursor-not-allowed">
                      Remove from Bag
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span>₹{product.newPrice}</span>
            <span className="text-xs line-through text-gray-600">
              ₹ {product.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
