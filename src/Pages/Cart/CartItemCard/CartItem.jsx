import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import { useAddToWishList } from "../../WishListContext/WishListContext";
import { useCartList } from "../../CartContext/CartContext";
const CartItem = ({ product }) => {
  const { addToWishList } = useAddToWishList();

  const { removeFromCart, addToCartInList, setQuantity, quantity } =
    useCartList();

  // const { addWishList } = useAddToWishList();

  const isInWishList = addToWishList.some((item) => item.id === product.id);

  // const isProductInCart = addToCartInList.some(
  //   (item) => item.id === product.id
  // );

  // console.log(isProductInCart);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  
  return (
    <>
      <div className="m-auto flex flex-col gap-2  p-4 rounded-sm shadow-sm bg-white/[0.6] mb-2 max-w-xl">
        <div className="flex  items-center flex-wrap gap-2 w-full">
          <div className="flex flex-wrap xs:flex-nowrap justify-center xs:justify-start flex-1 items-center gap-5">
            <div
              className=" bg-black/[0.075] h-28 w-28
              rounded-md flex items-center"
            >
              <img src={product.img} alt="" className="object-fit w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl py-3 font-semibold">{product.name}</h2>

              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <span className="text-gray-700">Quantity: </span>
                  <button
                    className="bg-[--primary-text-color] p-1 text-gray-100 rounded-md  text-xs "
                    onClick={handleDecrement}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="h-full w-10 bg-black/[0.075]  rounded-sm flex items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    className="bg-[--primary-text-color] p-1 text-gray-100 rounded-md text-xs "
                    onClick={handleIncrement}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className="flex gap-1 sm:gap-3  ">
                  <button
                    className="border border-[--primary-text-color]  py-1.5   rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition   text-xs sm:text-sm mt-2 max-w-xs "
                    onClick={() => removeFromCart(product.id, addToCartInList)}
                  >
                    Remove from bag
                  </button>
                  <button>
                    {isInWishList ? (
                      <BsFillBookmarkHeartFill className="text-xl text-rose-600 hover:shadow-md transition" />
                    ) : (
                      <BsBookmarkHeart className="text-xl hover:text-rose-600 hover:shadow-md transition" />
                    )}
                  </button>
                </div>
              </div>
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
    </>
  );
};

export default CartItem;
