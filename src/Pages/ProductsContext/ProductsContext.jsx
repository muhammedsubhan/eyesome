import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [ProductById, setProductById] = useState();

  useEffect(() => {
    console.log(ProductById);
  }, [ProductById]);

  return (
    <ProductsContext.Provider value={{ ProductById, setProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}

// Custom Hook
export function useProductById() {
  return useContext(ProductsContext);
}
