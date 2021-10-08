import { createContext, useEffect, useReducer } from "react";
import Data from "../../assets/products.json";

export const ShoppingCartContext = createContext();

const products = Data;

const initialState = JSON.parse(localStorage.getItem("state")) || {
  user: {},
  products: products,
  items: [],
  totalPrice: 0,
  totalProducts: 0
};

const reducer = (state,action) => {
  switch (action.type) {        
    case "ADD":
      return {
        ...state,
        ...state.products[action.payload.index].stock = state.products[action.payload.index].stock - 1,
        totalPrice: state.totalPrice + action.payload.price,
        totalProducts: state.totalProducts + 1,
        items: [...state.items, action.payload],
      }
    case "ADD_REPEATED_ITEM":
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
      return {
        ...state,     
        ...state.products[action.payload.index].stock = state.products[action.payload.index].stock - 1,   
        ...state.items[itemIndex].amount = state.items[itemIndex].amount + 1,        
        totalPrice: state.totalPrice + action.payload.price,
        totalProducts: state.totalProducts + 1,
      }
    case "REMOVE":
      return {
        ...state,
        ...state.products[action.payload.index].stock = state.products[action.payload.index].stock + action.payload.amount,
        totalPrice: state.totalPrice - action.payload.price * action.payload.amount,
        totalProducts: state.totalProducts - action.payload.amount,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
    default:
      return state;
  }
};

const ShoppingCartProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    state,
    dispatch
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state))
  }, [state])

  return (
    <ShoppingCartContext.Provider value ={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

export default ShoppingCartProvider