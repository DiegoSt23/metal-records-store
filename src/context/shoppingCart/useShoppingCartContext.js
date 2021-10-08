import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
};

export default useShoppingCartContext