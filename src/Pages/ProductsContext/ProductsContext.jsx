import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [ProductById, setProductById] = useState();

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
