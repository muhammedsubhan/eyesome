import React from "react";
import { useProductById } from "../ProductsContext/ProductsContext";
import { Link } from "react-router-dom";
const CartItemCard = ({ product, isSearch }) => {
  const { setProductById } = useProductById();
  const productDetailHandler = () => {
    setProductById(product);
  };

  return (
    <>
      <Link to="/product-details">
        <div
          onClick={productDetailHandler}
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
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span>₹{product.newPrice}</span>
              <span className="text-xs line-through text-gray-600">
                ₹ {product.oldPrice}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CartItemCard;
