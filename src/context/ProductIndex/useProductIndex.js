import { useContext } from "react";
import { ProductIndexContext } from "./ProductIndexProvider";

const useProductIndex = () => {
  return useContext(ProductIndexContext)
};

export default useProductIndex