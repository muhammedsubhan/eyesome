import { createContext, useContext, useState } from "react";

const CartListContext = createContext();

export function CartListContextProvider({ children }) {
  const [addToCartInList, setAddCartInList] = useState([]);

  const [quantity, setQuantity] = useState(1);

  function AddProductToCart(data) {
    setAddCartInList((prevList) => [...prevList, data]);
  }

  function removeFromCart(id, cart) {
    const filterCart = cart.filter((item) => item.id !== id);
    setAddCartInList(filterCart);
  }

  return (
    <CartListContext.Provider
      value={{
        addToCartInList,
        setAddCartInList,
        AddProductToCart,
        removeFromCart,
        setQuantity,
        quantity
      }}
    >
      {children}
    </CartListContext.Provider>
  );
}

// Custom Hook
export function useCartList() {
  return useContext(CartListContext);
}
