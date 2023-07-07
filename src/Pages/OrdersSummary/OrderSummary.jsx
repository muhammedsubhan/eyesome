import React from "react";
import { useCartList } from "../CartContext/CartContext";

const OrderSummary = ({ setShowModal }) => {
  const { addToCartInList, quantity } = useCartList();

  const totalItemsInCart = addToCartInList.reduce((total, product) => {
    return total + quantity;
  }, 0);

  const totalPriceOfCartProducts = addToCartInList.reduce((total, product) => {
    const productTotal = quantity * product.newPrice;
    return total + productTotal;
  }, 0);
  return (
    <>
      <section className="py-3 md:py-7 px-5 md:px-7 lg:px-12 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-5 w-full h-min">
        <h1 className="text-2xl font-bold">Order Summary</h1>

        {addToCartInList.map((item) => (
          <div
            className="flex flex-col gap-2 shadow-sm px-4 py-2 rounded-sm "
            key={item.id}
          >
            <div className="flex  items-center flex-wrap gap-2 w-full">
              <div className="flex flex-1 items-center gap-2">
                <div className=" bg-black/[0.075] h-16 w-16 rounded-md flex items-center">
                  <img src={item.img} alt="" className="object-fit w-full" />
                </div>
                <div className="">
                  <h2>{item.name}</h2>
                  <span>₹{item.newPrice}</span>
                  <span className="text-sm text-gray-500 line-through px-2">
                    ₹{item.oldPrice}
                  </span>
                </div>
              </div>
              <div className="text-lg">x{quantity}</div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center">
          <p className="text-gray-600">Total Items</p>
          <p className="text-xl">{totalItemsInCart}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className=" text-gray-600">Subtotal</p>
          <p className="text-2xl">₹{totalPriceOfCartProducts}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Discount</p>
          <p className="text-xl">-₹300</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-600">Delivery Charges</p>
          <p className="text-xl">Free</p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <p className=" text-gray-600">Total</p>
          <p className="text-2xl">₹{totalPriceOfCartProducts - 300}</p>
        </div>

        <div className="w-full py-2   flex gap-4 items-center">
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className=" border  bg-[--primary-text-color] text-white py-1.5   px-6  transition hover:bg-gray-800 rounded-full flex items-center gap-2 md:text-sm lg:text-base"
          >
            Place Order
          </button>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
