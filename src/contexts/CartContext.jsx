import React, { createContext, useContext, useReducer, useState } from "react";
import { sumQuantitiesAndPrices } from "../helpers/helpers";

const CartContext = createContext();
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

function cartReducer(state, action) {
  // console.log(state);
  // console.log(action.payload);
  switch (action.type) {
    case "ADD":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumQuantitiesAndPrices(state.selectedItems),
      };
    case "REMOVE":
      const filteredProductsByRemove = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        selectedItems: [...filteredProductsByRemove],
        ...sumQuantitiesAndPrices(filteredProductsByRemove),
        checkout: false,
      };
    case "INCREASE":
      const increasedIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increasedIndex].quantity++;
      return {
        ...state,
        ...sumQuantitiesAndPrices(state.selectedItems),
      };
    case "DECREASE":
      const decreasedIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreasedIndex].quantity--;
      return {
        ...state,
        ...sumQuantitiesAndPrices(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid Request");
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
export { useCart };
