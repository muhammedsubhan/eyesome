import React from "react";
import { useCartList } from "../../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

const CartTotalCard = ({ cart }) => {
  const { quantity } = useCartList();

  const navigate = useNavigate()

  const totalPriceOfCartProducts = cart.reduce((total, product) => {
    const productTotal = quantity * product.newPrice;
    return total + productTotal;
  }, 0);
  return (
    <>
      <section className="md:col-span-1 py-7 px-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
        <h1 className="text-xl">Price Details</h1>
        {cart.map((product) => (
          <div key={product.id} className=" flex  justify-between  ">
            <p className=" text-gray-600 flex-1">
              {product.name} ({quantity}) item
            </p>

            <p className="text-lg">₹ {quantity * product.newPrice}</p>
          </div>
        ))}

        <hr />
        <div className="flex justify-between items-center">
          <p className=" text-gray-600">Total</p>
          <p className="text-2xl">₹ {totalPriceOfCartProducts}</p>
        </div>

        <div className="w-full py-2   flex gap-4 items-center">
          <button
            onClick={() => navigate("/checkout")}
            className="border border-[--primary-text-color]  py-1.5   rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition  flex items-center gap-2 md:text-sm lg:text-base"
          >
            Proceed to Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default CartTotalCard;
