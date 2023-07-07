import React from "react";
import emptyBag from "../../assets/empty-shopping-bag.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import { useCartList } from "../CartContext/CartContext";
import CartTotalCard from "./CartTotalCard/CartTotalCard";
import CartItem from "./CartItemCard/CartItem";

const Cart = () => {
  const { addToCartInList } = useCartList();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="px-10 pt-24">
        {addToCartInList.length > 0 && (
          <h1 className="text-2xl font-bold p-3 ">
            Bag({addToCartInList.length})
          </h1>
        )}
        {addToCartInList.length ? (
          <div className="md:grid md:grid-cols-3 gap-5">
            <main className="md:col-span-2">
              {addToCartInList.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </main>
            <CartTotalCard cart={addToCartInList} />
          </div>
        ) : (
          <div className="h-[60vh] w-full flex flex-col items-center justify-center  gap-3 ">
            <img
              src={emptyBag}
              alt="empty bag"
              className="h-36 -rotate-12 mt-5 drop-shadow-lg"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold">Hey, it feels so light!</h2>
              <p className="text-sm text-gray-400">
                There's nothing in your bag. Let's add some items.
              </p>
            </div>

            <button
              className="border border-[--primary-text-color]  py-1.5   rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition text-sm mt-5"
              onClick={() => navigate("/start-shopping")}
            >
              Explore
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
