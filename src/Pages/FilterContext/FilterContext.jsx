import { createContext, useContext, useEffect, useState } from "react";

const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  const [sortByPrice, setSortByPrice] = useState([]);

  useEffect(() => {
    console.log(sortByPrice);
  }, [sortByPrice]);

  return (
    <FilterContext.Provider
      value={{
        sortByPrice,
        setSortByPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

// Custom Hook
export function useFilters() {
  return useContext(FilterContext);
}
