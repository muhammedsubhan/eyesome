import { createContext, useContext, useEffect, useState } from "react";

const WishListContext = createContext();

export function WishListContextProvider({ children }) {
  const [addToWishList, setAddToWishList] = useState([]);

  function addWishList(data) {
    setAddToWishList((prev) => [...prev, data]);
  }
  useEffect(() => {
    console.log(addToWishList);
  }, [addToWishList]);

  return (
    <WishListContext.Provider value={{ addWishList, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

// Custom Hook
export function useAddToWishList() {
  return useContext(WishListContext);
}
