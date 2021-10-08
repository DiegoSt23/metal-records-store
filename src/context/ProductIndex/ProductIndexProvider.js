import { createContext } from "react";
import { useState } from "react";

export const ProductIndexContext = createContext();

const ProductIndexProvider = ({children}) => {
  const [index, setIndex] = useState("");

  const contextValue = {
    index,
    changeIndex(index) {
      setIndex(index)
    }
  };

  return (
    <ProductIndexContext.Provider value={contextValue}>
      {children}
    </ProductIndexContext.Provider>
  )
};

export default ProductIndexProvider